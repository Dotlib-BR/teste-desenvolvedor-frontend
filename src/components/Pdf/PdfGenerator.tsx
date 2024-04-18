

import { PDFDownloadLink } from '@react-pdf/renderer';
import MedicineDetailsPDF from './PdfDocument';
import { FaFilePdf } from 'react-icons/fa6';

export const PDFGenerator = ({ data }: any) => {
  return (
    // gerar pdf
    <PDFDownloadLink
      document={<MedicineDetailsPDF details={data} />}
      fileName="bula.pdf">
      {({ loading }) => (loading ? 'Carregando documento...' : <FaFilePdf />)}
    </PDFDownloadLink>
  );
}
