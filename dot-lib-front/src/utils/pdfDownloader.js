export default function pdfDownloader(pdfLink) {
  const link = document.createElement('a');
  link.href = pdfLink;
  link.download = 'documento.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}