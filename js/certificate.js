import { fmtHours } from './dom.js';
import { APP_CONFIG } from './config.js';

export function buildVerifyUrl(certCode) {
  const base = window.location.origin + window.location.pathname;
  return `${base}?verify=${encodeURIComponent(certCode)}#verify`;
}

const NAVY = [30, 58, 138];
const GOLD = [176, 137, 52];
const INK = [30, 41, 59];
const MUTED = [100, 116, 139];

// Marco doble con esquinas, estilo diploma
function frame(doc) {
  doc.setDrawColor(...NAVY);
  doc.setLineWidth(1.8);
  doc.rect(8, 8, 281, 194);
  doc.setDrawColor(...GOLD);
  doc.setLineWidth(0.6);
  doc.rect(12, 12, 273, 186);
  doc.setFillColor(...GOLD);
  for (const [x, y] of [[12, 12], [285, 12], [12, 198], [285, 198]]) {
    doc.circle(x, y, 1.6, 'F');
  }
}

// Sello circular decorativo con el texto de verificación
function seal(doc, cx, cy) {
  doc.setDrawColor(...GOLD);
  doc.setLineWidth(1);
  doc.circle(cx, cy, 13);
  doc.setLineWidth(0.4);
  doc.circle(cx, cy, 10.5);
  doc.setFont('times', 'bold');
  doc.setFontSize(7);
  doc.setTextColor(...GOLD);
  doc.text('FORMACIÓN', cx, cy - 1.5, { align: 'center' });
  doc.text('VERIFICADA', cx, cy + 2.5, { align: 'center' });
}

export async function generateCertificatePDF(cert) {
  if (!window.jspdf || !window.jspdf.jsPDF) {
    throw new Error('La librería jsPDF no está disponible. Verifique su conexión a internet.');
  }
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4' });
  const verifyUrl = buildVerifyUrl(cert.code);
  const dateStr = new Date(cert.issuedAt).toLocaleDateString('es-CO', { year: 'numeric', month: 'long', day: 'numeric' });

  // ----- Página 1: reconocimiento -----
  frame(doc);
  doc.setFont('times', 'normal');
  doc.setFontSize(11);
  doc.setTextColor(...MUTED);
  doc.text(APP_CONFIG.responsable.razonSocial.toUpperCase(), 148.5, 27, { align: 'center' });

  doc.setFont('times', 'bold');
  doc.setFontSize(40);
  doc.setTextColor(...NAVY);
  doc.text('CONSTANCIA', 148.5, 48, { align: 'center' });

  doc.setFont('times', 'italic');
  doc.setFontSize(15);
  doc.setTextColor(...INK);
  doc.text('de formación teórica en Seguridad y Salud en el Trabajo', 148.5, 58, { align: 'center' });

  doc.setFontSize(12);
  doc.setTextColor(...MUTED);
  doc.text('Se otorga a', 148.5, 72, { align: 'center' });

  doc.setFont('times', 'bold');
  doc.setFontSize(28);
  doc.setTextColor(...INK);
  doc.text(cert.studentName, 148.5, 84, { align: 'center' });
  doc.setDrawColor(...GOLD);
  doc.setLineWidth(0.5);
  doc.line(64, 88, 233, 88);

  doc.setFont('times', 'normal');
  doc.setFontSize(10.5);
  doc.setTextColor(...MUTED);
  doc.text(`Documento: ${cert.documentId}${cert.company ? `   ·   Empresa: ${cert.company}` : ''}`, 148.5, 95, { align: 'center' });

  doc.setFont('times', 'italic');
  doc.setFontSize(12.5);
  doc.setTextColor(...INK);
  doc.text('por haber aprobado satisfactoriamente el curso', 148.5, 106, { align: 'center' });

  doc.setFont('times', 'bold');
  doc.setFontSize(18);
  doc.setTextColor(...NAVY);
  doc.text(cert.courseTitle, 148.5, 118, { align: 'center', maxWidth: 230 });

  doc.setFont('times', 'normal');
  doc.setFontSize(10.5);
  doc.setTextColor(...INK);
  doc.text(`Intensidad horaria: ${fmtHours(cert.hours)}   ·   Calificación: ${cert.score}%   ·   Emitido el ${dateStr}`, 148.5, 128, { align: 'center' });

  // Firma (izquierda), sello (centro), QR (derecha)
  doc.setDrawColor(...INK);
  doc.setLineWidth(0.3);
  doc.line(42, 168, 118, 168);
  doc.setFont('times', 'bold');
  doc.setFontSize(10.5);
  doc.setTextColor(...INK);
  doc.text(cert.trainerName || '', 80, 173, { align: 'center' });
  doc.setFont('times', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(...MUTED);
  doc.text(cert.trainerLicense || '', 80, 178, { align: 'center' });

  seal(doc, 148.5, 160);

  if (!cert.sample && window.QRCode && window.QRCode.toDataURL) {
    const qrDataUrl = await window.QRCode.toDataURL(verifyUrl, { width: 180, margin: 1 });
    doc.addImage(qrDataUrl, 'PNG', 225, 142, 36, 36);
    doc.setFont('times', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(...MUTED);
    doc.text('Escanee para verificar', 243, 181, { align: 'center' });
  }

  doc.setFont('times', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(...MUTED);
  doc.text(`Código de verificación: ${cert.code}`, 148.5, 192, { align: 'center' });

  // ----- Página 2: temario y alcance legal -----
  doc.addPage('a4', 'landscape');
  frame(doc);
  doc.setFont('times', 'bold');
  doc.setFontSize(22);
  doc.setTextColor(...NAVY);
  doc.text('Temario desarrollado', 148.5, 32, { align: 'center' });
  doc.setDrawColor(...GOLD);
  doc.setLineWidth(0.5);
  doc.line(112, 37, 185, 37);

  doc.setFont('times', 'normal');
  doc.setFontSize(11);
  doc.setTextColor(...INK);
  let y = 50;
  (cert.syllabus || []).forEach((item, i) => {
    doc.text(`${i + 1}.  ${String(item).replace(/^\s*\d+\.\s*/, '')}`, 36, y, { maxWidth: 225 });
    y += 7.5;
  });

  doc.setFont('times', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(...NAVY);
  doc.text(`Marco normativo de referencia: ${cert.regulation || ''}`, 36, y + 8, { maxWidth: 225 });

  doc.setFillColor(253, 248, 235);
  doc.setDrawColor(...GOLD);
  doc.setLineWidth(0.4);
  doc.rect(36, 146, 225, 36, 'FD');
  doc.setFont('times', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(120, 53, 15);
  doc.text('Alcance legal de esta constancia', 40, 152);
  doc.setFont('times', 'normal');
  doc.setFontSize(8.2);
  doc.text(`${APP_CONFIG.legalScopeStatement} ${cert.legalNotice || ''}`, 40, 157, { maxWidth: 217 });

  doc.setFont('times', 'italic');
  doc.setFontSize(8);
  doc.setTextColor(...MUTED);
  doc.text(`Verifique esta constancia en ${verifyUrl}`, 148.5, 192, { align: 'center', maxWidth: 260 });

  // Constancia de muestra: marca de agua en cada página para que nunca pase por una real.
  if (cert.sample) {
    const pages = doc.getNumberOfPages();
    for (let i = 1; i <= pages; i++) {
      doc.setPage(i);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(64);
      doc.setTextColor(220, 38, 38);
      if (doc.GState) doc.setGState(new doc.GState({ opacity: 0.18 }));
      doc.text('EJEMPLO SIN VALIDEZ', 148.5, 118, { align: 'center', angle: 20 });
      if (doc.GState) doc.setGState(new doc.GState({ opacity: 1 }));
    }
    doc.save('Constancia_EJEMPLO.pdf');
    return;
  }
  doc.save(`Constancia_${cert.courseId}_${cert.code}.pdf`);
}
