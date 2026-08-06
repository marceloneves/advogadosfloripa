#!/usr/bin/env python3
"""Gera public/theme/css/fa-subset.css com apenas os ícones usados no build.

O all.min.css do tema tem 512 KB e milhares de classes sem uso. Rode este
script depois de adicionar um ícone novo ao site:

    npm run build && python3 scripts/fa-subset.py
"""
import re, glob, sys

FULL = 'public/theme/css/all.min.css'
OUT = 'public/theme/css/fa-subset.css'
FAMILIAS = ('fa-solid-900.woff2', 'fa-brands-400.woff2', 'fa-regular-400.woff2')
PREFIXOS = {'fa-solid', 'fa-brands', 'fa-regular', 'fa-sharp', 'fa-light', 'fa-thin', 'fa-duotone'}

css = open(FULL).read()

usados = set()
for f in glob.glob('dist/**/*.html', recursive=True):
    for cls in re.findall(r'class="([^"]*fa-[^"]*)"', open(f).read()):
        usados |= {t for t in cls.split() if t.startswith('fa-') and t not in PREFIXOS}

faces = [b for b in re.findall(r'@font-face\{[^}]*\}', css) if any(k in b for k in FAMILIAS)]

# Um bloco pode declarar vários ícones no mesmo seletor:
#   .fa-shield-alt:before,.fa-shield-blank:before{content:"\f3ed"}
regras, faltando = [], []
blocos = re.findall(r'([^{}]+)\{(content:[^}]*)\}', css)
for ic in sorted(usados):
    alvo = f'.{ic}:before'
    for sel, corpo in blocos:
        if alvo in sel.split(','):
            regras.append(f'{alvo}{{{corpo}}}')
            break
        if any(s.strip() == alvo for s in sel.split(',')):
            regras.append(f'{alvo}{{{corpo}}}')
            break
    else:
        faltando.append(ic)

base = (
    '.fa,.fas,.fa-solid,.far,.fa-regular,.fab,.fa-brands,.fa-sharp{'
    '-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;'
    'display:var(--fa-display,inline-block);font-style:normal;font-variant:normal;'
    'line-height:1;text-rendering:auto}\n'
    '.fas,.fa-solid,.fa-sharp{font-family:"Font Awesome 6 Pro";font-weight:900}\n'
    '.far,.fa-regular{font-family:"Font Awesome 6 Pro";font-weight:400}\n'
    '.fab,.fa-brands{font-family:"Font Awesome 6 Brands";font-weight:400}\n'
)

open(OUT, 'w').write(
    '/* Font Awesome 6 — subset com os ícones realmente usados no site.\n'
    '   Gerado por scripts/fa-subset.py; não editar à mão. */\n'
    + '\n'.join(faces) + '\n' + base + '\n'.join(regras) + '\n'
)

print(f'{OUT}: {len(regras)}/{len(usados)} ícones')
if faltando:
    print('SEM REGRA:', faltando, file=sys.stderr)
    sys.exit(1)
