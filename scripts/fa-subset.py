#!/usr/bin/env python3
"""Gera o subset do Font Awesome: CSS e arquivos .woff2.

O tema vem com o all.min.css de 465 KB e ~1,9 MB de woff2 completos, para os
~30 ícones que o site usa de fato. Este script lê o build em dist/, descobre
quais classes `fa-*` aparecem no HTML e escreve:

  - public/theme/css/fa-subset.css  — só os @font-face e as regras usadas;
  - public/theme/webfonts/fa-*.woff2 — só os glifos usados.

Os arquivos originais ficam em vendor/fontawesome/ (fora de public/, para não
irem para a hospedagem). Rode depois de adicionar um ícone novo ao site:

    npm run build && python3 scripts/fa-subset.py

Precisa do fonttools com suporte a woff2:

    pip install fonttools brotlicffi
"""
import re, glob, sys, subprocess, shutil, os

VENDOR = 'vendor/fontawesome'
FULL = f'{VENDOR}/all.min.css'
OUT = 'public/theme/css/fa-subset.css'
WEBFONTS = 'public/theme/webfonts'
PREFIXOS = {'fa-solid', 'fa-brands', 'fa-regular', 'fa-sharp', 'fa-light', 'fa-thin', 'fa-duotone'}

# family -> (arquivo, weight). O tema usa `fal` (light) em alguns lugares; o
# Pro light não faz parte do pacote, então essas classes caem no solid.
FAMILIAS = [
    ('Font Awesome 6 Pro', 'fa-solid-900.woff2', 900),
    ('Font Awesome 6 Pro', 'fa-regular-400.woff2', 400),
    ('Font Awesome 6 Brands', 'fa-brands-400.woff2', 400),
]

css = open(FULL).read()

usados = set()
for f in glob.glob('dist/**/*.html', recursive=True):
    for cls in re.findall(r'class="([^"]*fa-[^"]*)"', open(f).read()):
        usados |= {t for t in cls.split() if t.startswith('fa-') and t not in PREFIXOS}
if not usados:
    sys.exit('Nenhum ícone encontrado em dist/. Rode `npm run build` antes.')

# Um bloco pode declarar vários ícones no mesmo seletor:
#   .fa-shield-alt:before,.fa-shield-blank:before{content:"\f3ed"}
regras, pontos, faltando = [], set(), []
blocos = re.findall(r'([^{}]+)\{(content:[^}]*)\}', css)
for ic in sorted(usados):
    alvo = f'.{ic}:before'
    for sel, corpo in blocos:
        if any(s.strip() == alvo for s in sel.split(',')):
            regras.append(f'{alvo}{{{corpo}}}')
            pontos |= {int(c, 16) for c in re.findall(r'\\([0-9a-f]{2,6})', corpo)}
            break
    else:
        faltando.append(ic)

# Cada família recebe a união dos pontos de código: o subsetter descarta
# sozinho o que a fonte não tem, e assim uma classe trocada de família no HTML
# não deixa o ícone sumir.
unicodes = ','.join(f'U+{p:04X}' for p in sorted(pontos))
sub = shutil.which('pyftsubset') or os.environ.get('PYFTSUBSET')
if not sub:
    sys.exit('pyftsubset não encontrado. Rode: pip install fonttools brotlicffi')

for _, arquivo, _ in FAMILIAS:
    origem = f'{VENDOR}/webfonts/{arquivo}'
    destino = f'{WEBFONTS}/{arquivo}'
    subprocess.run(
        [sub, origem, f'--unicodes={unicodes}', '--flavor=woff2',
         '--layout-features=', '--no-hinting', '--desubroutinize',
         f'--output-file={destino}'],
        check=True,
    )
    print(f'{destino}: {os.path.getsize(origem) // 1024} KB -> {os.path.getsize(destino) / 1024:.1f} KB')

# font-display:swap em vez do block que o Font Awesome usa por padrão: com o
# subset a fonte tem poucos KB, e o block adiava o primeiro paint do texto.
faces = '\n'.join(
    f'@font-face{{font-family:"{fam}";font-style:normal;font-weight:{peso};'
    f'font-display:swap;src:url(../webfonts/{arq}) format("woff2")}}'
    for fam, arq, peso in FAMILIAS
)

base = (
    '.fa,.fas,.fa-solid,.far,.fa-regular,.fab,.fa-brands,.fa-sharp,.fal,.fa-light{'
    '-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;'
    'display:var(--fa-display,inline-block);font-style:normal;font-variant:normal;'
    'line-height:1;text-rendering:auto}\n'
    '.fa,.fas,.fa-solid,.fa-sharp,.fal,.fa-light{font-family:"Font Awesome 6 Pro";font-weight:900}\n'
    '.far,.fa-regular{font-family:"Font Awesome 6 Pro";font-weight:400}\n'
    '.fab,.fa-brands{font-family:"Font Awesome 6 Brands";font-weight:400}\n'
)

open(OUT, 'w').write(
    '/* Font Awesome 6 — subset com os ícones realmente usados no site.\n'
    '   Gerado por scripts/fa-subset.py; não editar à mão. */\n'
    + faces + '\n' + base + '\n'.join(regras) + '\n'
)

print(f'{OUT}: {len(regras)}/{len(usados)} ícones, {len(pontos)} glifos')
if faltando:
    print('SEM REGRA:', faltando, file=sys.stderr)
    sys.exit(1)
