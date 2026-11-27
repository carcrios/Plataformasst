import { COURSES } from './catalog.js';
import { toast } from './dom.js';
import { generateCertificatePDF } from './certificate.js';

/**
 * Descarga una constancia de muestra para que el comprador vea cómo se ve la real.
 * Usa los datos reales del curso LOTO (horas, temario, normativa) y lleva marca de agua
 * "EJEMPLO SIN VALIDEZ" y no lleva QR: no es verificable.
 */
export function generateSampleCertificatePDF() {
  const c = COURSES.find((x) => x.id === 'loto-bloqueo') || COURSES[0];
  const sample = {
    sample: true,
    code: 'EJEMPLO',
    studentName: 'Nombre del trabajador',
    documentId: '0000000000',
    company: 'Empresa cliente S.A.S.',
    courseId: c.id,
    courseTitle: c.title,
    hours: c.hours,
    score: 94,
    issuedAt: new Date().toISOString(),
    regulation: c.regulation,
    syllabus: c.modules.map((m) => m.title),
    trainerName: 'Nombre del formador',
    trainerLicense: 'Licencia SST',
    legalNotice: c.legalNotice || ''
  };
  generateCertificatePDF(sample).catch((err) => toast(err.message, 'warning'));
}
