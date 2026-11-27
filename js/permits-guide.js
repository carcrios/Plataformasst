import { esc, root, toast } from './dom.js';

/**
 * Módulo interactivo: Cómo llenar correctamente un Permiso de Trabajo y ATS
 * según buenas prácticas y normatividad colombiana (Decreto 1072/2015, Res. 4272/2021, NFPA 51B).
 */
export function renderPermitsGuide(container) {
  const host = container || root();
  const hTag = container ? 'h2' : 'h1';
  host.innerHTML = `
    <section style="display:flex; flex-direction:column; gap:1.25rem; max-width:960px; margin:0 auto;">
      <div class="iui-card">
        <span class="iui-badge iui-badge-primary" style="width:fit-content;">Guía Práctica de Campo · Colombia</span>
        <${hTag} class="${container ? 'iui-h2' : 'iui-h1'}" style="margin-top:0.35rem;">Cómo llenar un Permiso de Trabajo y ATS paso a paso</${hTag}>
        <p class="iui-small iui-muted" style="margin:0;">
          Un permiso de trabajo <strong>no es un papel para cumplir requisito</strong>: es la última barrera administrativa antes de ejecutar una tarea crítica. Aquí aprendes sus 6 bloques obligatorios y practicas diligenciando uno con auditoría automática.
        </p>
      </div>

      <div class="iui-card">
        <h2 class="iui-h2">Los 6 bloques obligatorios de todo Permiso de Trabajo</h2>
        <div class="iui-grid" style="grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));">
          <div style="padding:0.9rem; border:1px solid var(--iui-border); border-radius:0.625rem; background:var(--iui-surface-alt);">
            <strong>1. Alcance y Vigencia Exacta</strong>
            <p class="iui-xs iui-muted" style="margin:0.35rem 0 0;">Describe exactamente qué se hará, dónde, fecha, hora de inicio y hora de fin (máximo un turno). Nunca se firma "para toda la semana".</p>
          </div>
          <div style="padding:0.9rem; border:1px solid var(--iui-border); border-radius:0.625rem; background:var(--iui-surface-alt);">
            <strong>2. Tipo de Tarea Crítica</strong>
            <p class="iui-xs iui-muted" style="margin:0.35rem 0 0;">Trabajo en caliente, Alturas (riesgo de caída de 2,0 m o más, Res. 4272 de 2021), Energías peligrosas (LOTO), Izaje de cargas, Espacios confinados o Químicos.</p>
          </div>
          <div style="padding:0.9rem; border:1px solid var(--iui-border); border-radius:0.625rem; background:var(--iui-surface-alt);">
            <strong>3. ATS (Paso → Peligro → Control)</strong>
            <p class="iui-xs iui-muted" style="margin:0.35rem 0 0;">Divide la tarea en pasos concretos e indica el peligro y el control real (no escribir frases genéricas como "tener cuidado").</p>
          </div>
          <div style="padding:0.9rem; border:1px solid var(--iui-border); border-radius:0.625rem; background:var(--iui-surface-alt);">
            <strong>4. Verificaciones Críticas en Sitio</strong>
            <p class="iui-xs iui-muted" style="margin:0.35rem 0 0;">Medición de gases (nunca por encima del 10 % del LEL en el área y 0 % dentro de recipientes o tuberías a intervenir; el criterio exacto lo fija su procedimiento), verificación de energía cero (LOTO), radio de 11 m libre de combustibles, extintor y vigía.</p>
          </div>
          <div style="padding:0.9rem; border:1px solid var(--iui-border); border-radius:0.625rem; background:var(--iui-surface-alt);">
            <strong>5. Firmas de Autorización en Sitio</strong>
            <p class="iui-xs iui-muted" style="margin:0.35rem 0 0;">Firma el <strong>Emisor</strong> (dueño del área que entrega condiciones seguras) y el <strong>Ejecutante</strong>. Nunca se firma en oficina sin ir al punto.</p>
          </div>
          <div style="padding:0.9rem; border:1px solid var(--iui-border); border-radius:0.625rem; background:var(--iui-surface-alt);">
            <strong>6. Suspensión y Cierre Formal</strong>
            <p class="iui-xs iui-muted" style="margin:0.35rem 0 0;">Se anula automáticamente si suena alarma, cambia el alcance o hay lluvia/tormenta. Al terminar se inspecciona el área y se firma el cierre.</p>
          </div>
        </div>
      </div>

      <div class="iui-card">
        <span class="iui-badge iui-badge-success" style="width:fit-content;">Simulador Interactivo con Auditoría SST</span>
        <h2 class="iui-h2" style="margin-top:0.35rem;">Practica llenando un Permiso de Trabajo real</h2>
        <p class="iui-small iui-muted">Diligencia los campos como si estuvieras en planta. Al enviarlo, el auditor automático revisará si cometiste algún error crítico.</p>

        <div id="permit-audit-result" style="margin-bottom:1rem;"></div>

        <form id="permit-sim-form">
          <div class="iui-grid" style="grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));">
            <div class="iui-field">
              <label class="iui-label">Tipo de tarea crítica *</label>
              <select class="iui-select" name="taskType" required>
                <option value="caliente">Trabajo en Caliente (Soldadura / Corte)</option>
                <option value="loto">Aislamiento de Energías (LOTO)</option>
                <option value="alturas">Trabajo en alturas (riesgo de caída de más de 2 m)</option>
                <option value="izaje">Izaje de Cargas</option>
              </select>
            </div>
            <div class="iui-field">
              <label class="iui-label">Ubicación exacta en planta *</label>
              <input class="iui-input" name="location" required placeholder="Ej. Nave 2 — Línea de empaque" />
            </div>
            <div class="iui-field">
              <label class="iui-label">Hora de inicio *</label>
              <input class="iui-input" name="startTime" type="time" required value="08:00" />
            </div>
            <div class="iui-field">
              <label class="iui-label">Hora de fin (mismo turno) *</label>
              <input class="iui-input" name="endTime" type="time" required value="12:00" />
            </div>
            <div class="iui-field">
              <label class="iui-label">Medición LEL % (si aplica)</label>
              <input class="iui-input" name="lel" type="number" step="0.1" value="0" />
            </div>
            <div class="iui-field">
              <label class="iui-label">Control ATS concreto *</label>
              <input class="iui-input" name="atsControl" required placeholder="Ej. Bloquear seccionador con candado personal y probar energía cero" />
            </div>
            <div class="iui-field">
              <label class="iui-label">Nombre del Emisor (Dueño de área) *</label>
              <input class="iui-input" name="issuer" required placeholder="Ej. Ing. Marta Ruiz" />
            </div>
            <div class="iui-field">
              <label class="iui-label">Nombre del Ejecutante *</label>
              <input class="iui-input" name="executor" required placeholder="Ej. Carlos Gómez" />
            </div>
          </div>

          <p class="iui-label" style="margin:0.5rem 0;">Verificaciones obligatorias en sitio:</p>
          <div style="display:flex; flex-direction:column; gap:0.45rem; margin-bottom:1rem;">
            <label class="iui-checkbox-row"><input type="checkbox" name="chk" value="inspeccion" /> <span class="iui-small">Se inspeccionó el área en sitio antes de firmar (no desde oficina).</span></label>
            <label class="iui-checkbox-row"><input type="checkbox" name="chk" value="epp" /> <span class="iui-small">Todo el equipo ejecutor cuenta con EPP específico y certificado en buen estado.</span></label>
            <label class="iui-checkbox-row"><input type="checkbox" name="chk" value="emergencia" /> <span class="iui-small">Extintor, ruta de evacuación y plan de rescate/emergencia verificados.</span></label>
            <label class="iui-checkbox-row"><input type="checkbox" name="chk" value="cierre" /> <span class="iui-small">Se acuerda firma de cierre formal en sitio al terminar la tarea.</span></label>
          </div>

          <button type="submit" class="iui-btn iui-btn-primary">Auditar Permiso de Trabajo</button>
        </form>
      </div>
    </section>
  `;

  document.getElementById('permit-sim-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const taskType = fd.get('taskType');
    const start = String(fd.get('startTime') || '');
    const end = String(fd.get('endTime') || '');
    const lel = Number(fd.get('lel'));
    const atsControl = String(fd.get('atsControl') || '').trim().toLowerCase();
    const issuer = String(fd.get('issuer') || '').trim().toLowerCase();
    const executor = String(fd.get('executor') || '').trim().toLowerCase();
    const checks = fd.getAll('chk');

    const errors = [];
    const warnings = [];
    // Duración en minutos; admite turnos nocturnos que cruzan la medianoche.
    const toMin = (t) => { const [h, m] = t.split(':').map(Number); return h * 60 + m; };
    let dur = start && end ? toMin(end) - toMin(start) : 0;
    if (dur < 0) dur += 24 * 60;
    if (!start || !end || dur === 0) errors.push('Indique una hora de inicio y una hora de fin distintas.');
    else if (dur > 12 * 60) errors.push('El permiso no puede cubrir más de un turno (máximo 12 horas). Se emite uno nuevo por turno.');
    if (taskType === 'caliente' && lel >= 10) errors.push('Con una lectura igual o mayor al 10 % del LEL no se autoriza trabajo en caliente: ventile, encuentre la fuente y vuelva a medir.');
    else if (taskType === 'caliente' && lel > 0) warnings.push('Hay gases combustibles presentes. Muchos procedimientos exigen 0 % del LEL, y siempre se exige 0 % dentro de recipientes o tuberías a cortar o soldar. Verifique su procedimiento y mantenga monitoreo continuo.');
    if (atsControl.length < 15 || atsControl.includes('tener cuidado') || atsControl.includes('estar atento')) {
      errors.push('El control ATS es demasiado genérico. Escribe un control técnico concreto (ej. bloqueo LOTO, mamparas, barandas, extintor).');
    }
    if (issuer && executor && issuer === executor) {
      errors.push('El Emisor (dueño del área) y el Ejecutante no deben ser la misma persona para garantizar doble verificación.');
    }
    if (checks.length < 4) {
      errors.push('Faltan verificaciones obligatorias en sitio por confirmar (inspección, EPP, emergencia y compromiso de cierre).');
    }

    const out = document.getElementById('permit-audit-result');
    if (errors.length > 0) {
      out.innerHTML = `
        <div class="iui-alert iui-alert-danger">
          <strong>Permiso RECHAZADO por Auditoría SST (${errors.length} hallazgo(s)):</strong>
          <ul style="margin:0.4rem 0 0; padding-left:1.2rem;">
            ${errors.map((err) => `<li>${esc(err)}</li>`).join('')}
          </ul>
        </div>
      `;
      toast('Revisa los hallazgos de auditoría.', 'warning');
      return;
    }

    out.innerHTML = `
      ${warnings.map((w) => `<div class="iui-alert iui-alert-warning" style="margin-bottom:0.5rem;"><strong>Atención:</strong> ${esc(w)}</div>`).join('')}
      <div class="iui-alert iui-alert-success">
        <strong>¡Permiso de Trabajo APROBADO! ✓</strong> Cumple con alcance, vigencia de turno, control ATS concreto, doble verificación (Emisor/Ejecutante) y condiciones seguras en sitio.
      </div>
    `;
    toast('¡Excelente! Permiso diligenciado correctamente.', 'success');
  });
}
