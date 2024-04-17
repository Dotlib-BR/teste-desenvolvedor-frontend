import jsPDF from "jspdf";
import { leafletProps } from "./types";
import dayjs from 'dayjs';

export function generatePDF(leaflet: leafletProps, type: string) {
  const doc = new jsPDF();

  doc.setFontSize(20);
  doc.text(`Medicamento: ${leaflet.name}`, 10, 10);

  doc.setFontSize(14);
  doc.text("Empresa:", 10, 20);

  doc.setFontSize(14);
  doc.text(leaflet.company, 10, 28);

  const date = dayjs(leaflet.published_at.split('T')[0]).format('DD/MM/YYYY')

  doc.setFontSize(14);
  doc.text(`Data de publicação: ${date}`, 10, 40);

  doc.setFontSize(14);
  doc.text('Princípios ativos', 10, 60);
  doc.setFontSize(12);
  leaflet.active_principles.forEach((principle, index) => {
    doc.text(`${index + 1}. ${principle.name}`, 10, 70 + index * 10);
  });

  doc.setFontSize(14);
  type === 'PROFESSIONAL' ? doc.text('Paciente', 150, 40) : doc.text('Profissional', 150, 40);

  doc.setFontSize(12);
  type === 'PROFESSIONAL' ? doc.text(leaflet.documents[0].expedient, 150, 50) : doc.text(leaflet.documents[1].expedient, 150, 50);

  // doc.save(`${leaflet.id}.pdf`);
  const pdfData = doc.output('blob');

  const pdfUrl = URL.createObjectURL(pdfData);

  // Open PDF in new tab
  window.open(pdfUrl);
}