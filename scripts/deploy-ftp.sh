#!/usr/bin/env bash
#
# Publica o site estático (dist/) na hospedagem por FTP.
#
# Sobre o servidor (pro125.dnspro.net.br), levantado na primeira publicação:
#   - a porta 1157 é SSH, mas o subsistema sftp sai com status 1 e o shell não
#     abre sessão; sobrou o FTP na porta 21;
#   - o servidor aceita TLS no canal de controle (login criptografado), mas
#     responde 425 quando se exige TLS também no canal de dados. Daí o
#     --ftp-ssl-control em vez de --ssl-reqd: a senha trafega protegida, o
#     conteúdo dos arquivos não. Como o site é público e estático, o que está
#     em jogo aqui é só a credencial.
#
# Uso:
#   1. crie .env.deploy na raiz (já está no .gitignore):
#
#        FTP_HOST=pro125.dnspro.net.br
#        FTP_USER=kfsadvogados
#        SSH_PASS=a-senha
#        REMOTE_DIR=public_html
#
#   2. npm run build
#   3. bash scripts/deploy-ftp.sh
set -euo pipefail

RAIZ="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
ENV_FILE="$RAIZ/.env.deploy"
LOCAL_DIR="$RAIZ/dist"

[[ -f "$ENV_FILE" ]] || { echo "Falta .env.deploy na raiz. Veja o cabeçalho deste script." >&2; exit 1; }
[[ -d "$LOCAL_DIR" ]] || { echo "dist/ não existe. Rode 'npm run build' antes." >&2; exit 1; }

# shellcheck disable=SC1090
set -a; source "$ENV_FILE"; set +a

FTP_HOST="${FTP_HOST:-${SSH_HOST:?defina FTP_HOST}}"
FTP_USER="${FTP_USER:-${SSH_USER:?defina FTP_USER}}"
FTP_PASS="${FTP_PASS:-${SSH_PASS:?defina FTP_PASS}}"
REMOTE_DIR="${REMOTE_DIR:-public_html}"
REMOTE_DIR="${REMOTE_DIR#/}"

BASE="ftp://${FTP_HOST}/${REMOTE_DIR%/}/"

# A senha entra por --config, lido de um arquivo temporário com permissão 600:
# na linha de comando ela apareceria em qualquer `ps` da máquina.
CONF="$(mktemp -t curlrc)"
chmod 600 "$CONF"
trap 'rm -f "$CONF"' EXIT
printf 'user = "%s:%s"\n' "$FTP_USER" "$FTP_PASS" >"$CONF"

CURL=(curl --config "$CONF" --silent --show-error --fail
	--ftp-ssl-control --ftp-create-dirs
	--connect-timeout 20 --max-time 300)

total=$(find "$LOCAL_DIR" -type f | wc -l | tr -d ' ')

# Um `curl` por arquivo abriria uma conexão FTP por arquivo — 200+ logins em
# poucos segundos, o que o Imunify360 do servidor trata como força bruta e
# responde bloqueando o IP. Enviando em lotes, cada invocação reaproveita a
# mesma conexão para todos os arquivos do lote.
LOTE=40
enviados=0
falhas=0

echo "Publicando $total arquivos em ${FTP_HOST}/${REMOTE_DIR} (lotes de $LOTE)"

args=()
no_lote=0

envia_lote() {
	[[ ${#args[@]} -eq 0 ]] && return 0
	if "${CURL[@]}" "${args[@]}" 2>/tmp/ftp-erro.txt; then
		enviados=$((enviados + no_lote))
		printf '\r  %d/%d\033[K' "$enviados" "$total"
	else
		falhas=$((falhas + no_lote))
		printf '\r\033[K'
		echo "  FALHOU um lote de $no_lote — $(tr -d '\n' </tmp/ftp-erro.txt)" >&2
	fi
	args=()
	no_lote=0
	# Respiro entre lotes: sem isso o antiflood volta a disparar.
	sleep 2
}

while IFS= read -r arquivo; do
	relativo="${arquivo#"$LOCAL_DIR"/}"
	args+=(--upload-file "$arquivo" "${BASE}${relativo}")
	no_lote=$((no_lote + 1))
	[[ $no_lote -ge $LOTE ]] && envia_lote
done < <(find "$LOCAL_DIR" -type f | sort)

envia_lote

printf '\n'
rm -f /tmp/ftp-erro.txt

if [[ "$falhas" -gt 0 ]]; then
	echo "Concluído com $falhas falha(s) de $total arquivos." >&2
	exit 1
fi

echo "Concluído: $enviados arquivos publicados."
echo
echo "Nota: o script sobrescreve e adiciona, mas não remove do servidor os"
echo "arquivos que deixaram de existir em dist/."
