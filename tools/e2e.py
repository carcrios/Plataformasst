"""
Prueba de punta a punta en navegador real (Chrome + Playwright) contra el entorno local completo.

  1) node tools/local-server.mjs --reset      (en otra terminal)
  2) python3 tools/e2e.py                      (opcional: E2E_BASE, E2E_SHOTS, CHROME_PATH)

Recorre: portada -> carrito -> checkout -> Wompi simulado -> retorno del pago -> correo de activación
-> crear contraseña -> ingreso -> panel -> curso completo (caso, módulos, prácticas, escenarios, lista)
-> evaluación fallida -> evaluación aprobada -> constancia -> PDF -> verificación pública -> administrador.
Toma capturas de escritorio y celular en /tmp/e2e-shots (o E2E_SHOTS).
"""
import json
import os
import re
import subprocess
import sys
import time
from pathlib import Path

from playwright.sync_api import sync_playwright, expect

BASE = os.environ.get('E2E_BASE', 'http://localhost:8787/')
SHOTS = Path(os.environ.get('E2E_SHOTS', '/tmp/e2e-shots'))
CHROME = os.environ.get('CHROME_PATH', '/usr/bin/google-chrome')
ROOT = Path(__file__).resolve().parent.parent
COURSE = os.environ.get('E2E_COURSE', 'loto-bloqueo')
EMAIL = f'trabajador{int(time.time())}@empresa.co'
PASSWORD = 'ClaveSegura2026'
SHOTS.mkdir(parents=True, exist_ok=True)

# Textos de la respuesta correcta de cada pregunta (desde la clave del backend + el catálogo público)
KEYS = json.loads(subprocess.check_output(['node', '-e', f"""
const fs=require('fs'),vm=require('vm');const ctx={{}};vm.createContext(ctx);
vm.runInContext(fs.readFileSync('{ROOT}/backend/Content.gs','utf8')+';this.C=CONTENT;',ctx);
import('{ROOT}/web/js/catalog.js').then(m=>{{const c=m.COURSES.find(x=>x.id==='{COURSE}');
console.log(JSON.stringify({{right:c.exam.map((q,i)=>q.options[ctx.C['{COURSE}'].exam[i]])}}));}});
"""], text=True))['right']

errors = []
step_no = [0]


def step(msg):
    step_no[0] += 1
    print(f'[{step_no[0]:02d}] {msg}', flush=True)


def shot(page, name, full=True):
    page.screenshot(path=str(SHOTS / f'{name}.png'), full_page=full)


def watch(page):
    page.on('pageerror', lambda e: errors.append(f'pageerror: {e}'))
    page.on('console', lambda m: errors.append(f'console: {m.text}') if m.type == 'error' and 'favicon' not in m.text and 'fonts.g' not in m.text and 'ERR_TUNNEL' not in m.text else None)


def fill_work(page, seed, rubric=False):
    form = page.locator('form.sst-work')
    for j, ta in enumerate(form.locator('textarea').all()):
        need = int(ta.get_attribute('data-min'))
        ta.fill(' '.join(f'idea{seed}n{j}w{k}' for k in range(need + 3)))
    if rubric:
        for cb in form.locator('.sst-rubric input').all():
            cb.check()
    form.locator('button[type=submit]').click()


def answer_exam(page, correct):
    for i, right in enumerate(KEYS):
        labels = page.locator(f'fieldset.sst-question').nth(i).locator('label.sst-option')
        texts = [labels.nth(k).inner_text().strip() for k in range(labels.count())]
        pick = texts.index(right) if correct else next(k for k, t in enumerate(texts) if t != right)
        labels.nth(pick).click()


def run(p):
    global page
    browser = p.chromium.launch(executable_path=CHROME, args=['--no-sandbox'])
    ctx = browser.new_context(viewport={'width': 1366, 'height': 900}, accept_downloads=True, service_workers='block')
    page = ctx.new_page()
    watch(page)
    page.clock.install()

    step('Portada y ficha del curso')
    page.goto(BASE + '#catalog')
    expect(page.locator('.sst-hero-title')).to_be_visible()
    expect(page.locator(f'[data-price="{COURSE}"]')).to_have_text(re.compile(r'\$'))
    shot(page, '01-portada')
    page.goto(BASE + f'#info/{COURSE}')
    expect(page.locator('.sst-buy-price')).to_have_text(re.compile(r'\$'))
    page.click(f'[data-add="{COURSE}"]')
    expect(page.locator('.sst-cart-count')).to_have_text('1')
    shot(page, '02-ficha')

    step('Tienda y checkout con cupón')
    page.goto(BASE + '#store')
    expect(page.locator('#btn-go-checkout')).to_be_enabled()
    page.click('#btn-go-checkout')
    page.fill('#co-name', 'Laura Gómez Pérez')
    page.fill('#co-doc', '1032456789')
    page.fill('#co-email', EMAIL)
    page.fill('#co-company', 'Planta de Prueba S.A.S.')
    page.fill('#co-code', 'BIENVENIDA10')
    page.click('#btn-coupon')
    expect(page.locator('#co-preview')).to_contain_text('Cupón aplicado')
    page.check('input[name="privacy"]')
    page.check('input[name="terms"]')
    shot(page, '03-checkout')
    page.click('#btn-pay')

    step('Wompi simulado: firma de integridad y aprobación')
    page.wait_for_url(re.compile(r'/fake-wompi/'))
    expect(page.locator('body')).to_contain_text('válida')
    expect(page.locator('body')).to_contain_text('135.000')  # 150.000 menos 10 %
    shot(page, '04-wompi')
    page.click('button[value="APPROVED"]')

    step('Retorno del pago')
    expect(page.locator('#pay-status, .iui-card').first).to_contain_text('Compra realizada', timeout=20000)
    shot(page, '05-pago-aprobado')

    step('Correo de activación y creación de contraseña')
    page.goto(BASE + 'correo')
    link = page.locator('a', has_text='set-password').first
    href = link.get_attribute('href')
    assert href and 'token=' in href, 'No llegó el enlace de activación'
    page.goto(href)
    page.fill('#sp-pass', PASSWORD)
    page.fill('#sp-pass2', PASSWORD)
    page.click('#sp-form button[type="submit"]')
    page.wait_for_url(re.compile(r'#login'))

    step('Ingreso y panel del alumno')
    page.fill('#l-email', EMAIL)
    page.fill('#l-pass', PASSWORD)
    page.click('#login-form button[type="submit"]')
    expect(page.locator('.sst-dash-card')).to_have_count(1)
    expect(page.locator('.sst-dash-card')).to_contain_text('Vigente hasta')
    shot(page, '06-panel')

    step('Curso: caso real')
    page.click('.sst-dash-card a.iui-btn')
    expect(page.locator('.sst-step-title')).to_have_text('Un caso real')
    shot(page, '07-caso')
    page.click('#btn-next')

    has_project = page.locator('.sst-steps-list li', has_text='Proyecto final').count() > 0
    modules = page.locator('.sst-steps-list li').count() - (5 if has_project else 4)
    for i in range(modules):
        step(f'Curso: módulo {i + 1} de {modules}')
        expect(page.locator('.sst-step-kicker').first).to_contain_text(f'Módulo {i + 1}')
        prose = page.locator('.sst-prose').inner_html()
        assert '&lt;p&gt;' not in prose and '&lt;strong&gt;' not in prose, 'El contenido muestra etiquetas HTML literales'
        expect(page.locator('#btn-read')).to_be_disabled()
        page.locator('#practice-box label.sst-option').first.click()
        page.click('#btn-practice')
        expect(page.locator('#practice-result .sst-feedback')).to_be_visible()
        if page.locator('form.sst-work').count():
            fill_work(page, f'm{i}')
            expect(page.locator('form.sst-work')).to_contain_text('Entregado')
        if i == 0:
            shot(page, '08-modulo')
        page.clock.run_for(400_000)
        expect(page.locator('#btn-read')).to_be_enabled()
        page.click('#btn-read')
        expect(page.locator('.sst-read-row')).to_contain_text('Módulo leído')
        page.click('#btn-next')

    step('Curso: escenarios')
    expect(page.locator('.sst-step-title')).to_have_text('Escenarios de decisión')
    for b in range(page.locator('[data-scenario]').count()):
        idx = page.locator('[data-scenario]').first.get_attribute('data-scenario')
        page.locator(f'input[name="sc-{idx}"]').nth(1).check()
        page.locator(f'[data-scenario="{idx}"]').click()
        expect(page.locator(f'#sc-result-{idx} .sst-feedback')).to_be_visible()
    shot(page, '09-escenarios')
    page.click('#btn-next')

    if has_project:
        step('Curso: proyecto final')
        expect(page.locator('.sst-step-title')).to_contain_text('Proyecto final')
        fill_work(page, 'proy', rubric=True)
        expect(page.locator('form.sst-work')).to_contain_text('Entregado')
        shot(page, '09b-proyecto')
        page.click('#btn-next')

    step('Curso: lista de verificación y requisitos de la evaluación')
    expect(page.locator('.sst-step-title')).to_have_text('Lista de verificación')
    page.click('#btn-next')
    expect(page.locator('.sst-reqs li.ok')).to_have_count(page.locator('.sst-reqs li').count())
    shot(page, '10-requisitos')
    page.click('a[href^="#exam/"]')

    step('Evaluación: intento fallido')
    expect(page.locator('fieldset.sst-question')).to_have_count(len(KEYS))
    expect(page.locator('#btn-review')).to_be_disabled()
    answer_exam(page, correct=False)
    page.click('#btn-review')
    expect(page.locator('.sst-confirm')).to_be_visible()
    shot(page, '11-confirmar')
    page.click('#btn-submit')
    expect(page.locator('.sst-result.bad')).to_be_visible()
    expect(page.locator('#exam-result')).to_contain_text('Le quedan')
    expect(page.locator('.sst-reveal')).to_have_count(0)  # no revela respuestas con intentos disponibles
    shot(page, '12-no-aprobado')

    step('Evaluación: intento aprobado')
    page.click('#btn-retry')
    expect(page.locator('fieldset.sst-question')).to_have_count(len(KEYS))
    expect(page.locator('.sst-exam')).to_contain_text('intento 2 de 3')
    answer_exam(page, correct=True)
    page.click('#btn-review')
    page.click('#btn-submit')
    expect(page.locator('.sst-result.ok')).to_contain_text('100')
    shot(page, '13-aprobado')

    step('Constancia: emisión y PDF')
    page.click('#btn-issue')
    page.wait_for_url(re.compile(r'#certs'))
    expect(page.locator('.btn-pdf')).to_have_count(1)
    code = page.locator('.btn-pdf').get_attribute('data-code')
    with page.expect_download() as dl:
        page.click('.btn-pdf')
    pdf = SHOTS / 'constancia.pdf'
    dl.value.save_as(pdf)
    assert pdf.stat().st_size > 20_000, 'PDF demasiado pequeño'
    shot(page, '14-constancias')

    step('Verificación pública de la constancia')
    pub = ctx.new_page()
    watch(pub)
    pub.goto(BASE + f'?verify={code}#verify')
    expect(pub.locator('#verify-result')).to_contain_text('auténtica y vigente')
    expect(pub.locator('#verify-result')).to_contain_text('•')  # documento enmascarado
    shot(pub, '15-verificacion')
    pub.goto(BASE + '?verify=CERT-2026-FALSO-00000000#verify')
    expect(pub.locator('#verify-result')).to_contain_text('No encontramos')

    step('Administrador: ingreso y lista de alumnos')
    page.click('#btn-logout')
    page.wait_for_url(re.compile(r'#catalog'))
    expect(page.locator('.sst-hero-title')).to_be_visible()
    page.goto(BASE + '#login')
    page.fill('#l-email', 'admin@academiasst.co')
    page.fill('#l-pass', 'AdminLocal2026!')
    page.click('#login-form button[type="submit"]')
    page.wait_for_url(re.compile(r'#admin'))
    expect(page.locator('body')).to_contain_text(EMAIL)
    shot(page, '16-admin')

    step('Celular: portada, menú, panel y curso')
    m = browser.new_context(viewport={'width': 390, 'height': 844}, is_mobile=True, has_touch=True, service_workers='block')
    mp = m.new_page()
    watch(mp)
    mp.goto(BASE + '#catalog')
    shot(mp, '20-movil-portada', full=False)
    mp.click('#menu-btn')
    expect(mp.locator('#main-nav')).to_be_visible()
    shot(mp, '21-movil-menu', full=False)
    mp.goto(BASE + '#login')
    mp.fill('#l-email', EMAIL)
    mp.fill('#l-pass', PASSWORD)
    mp.click('#login-form button[type="submit"]')
    expect(mp.locator('.sst-dash-card')).to_have_count(1)
    shot(mp, '22-movil-panel', full=False)
    mp.goto(BASE + f'#course/{COURSE}/m1')
    expect(mp.locator('.sst-steps-select')).to_be_visible()
    shot(mp, '23-movil-modulo')
    mp.goto(BASE + '#store')
    shot(mp, '24-movil-tienda', full=False)

    browser.close()


page = None
with sync_playwright() as pw:
    try:
        run(pw)
    except Exception:
        if page is not None:
            try:
                page.screenshot(path=str(SHOTS / 'zz-fallo.png'), full_page=True)
                print('URL en el fallo:', page.url)
            except Exception:
                pass
        raise

real = [e for e in errors if 'status of 404' not in e or 'favicon' not in e]
print('\nErrores de consola o de página:', len(real))
for e in real:
    print('  -', e)
print(f'\nOK: recorrido completo. Capturas en {SHOTS}')
sys.exit(1 if real else 0)
