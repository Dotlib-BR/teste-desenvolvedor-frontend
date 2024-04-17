import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { DocumentModalStyles } from './styles';
import { IDataDocument } from '../showData';
import { inter } from '@/pages';

interface IDocumentModal {
  data: IDataDocument[];
  close: () => void;
}

export const DocumentsModal = ({
  data,
  close,
}: IDocumentModal): React.ReactNode => {
  return (
    <DocumentModalStyles>
      <div id="document-modal-content">
        <h3 className={inter.className}>Informações do documento</h3>
        <button id="close-document-modal-button" onClick={close}>
          <CloseIcon />
        </button>
        <TableContainer component={Paper}>
          <Table size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>Tipo</TableCell>
                <TableCell>Registro</TableCell>
                <TableCell>URL</TableCell>
                <TableCell>ID</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <TableRow key={row.type}>
                  <TableCell component="th" scope="row">
                    {row.type}
                  </TableCell>
                  <TableCell>{row.expedient}</TableCell>
                  <TableCell>
                    <a href={row.url}>{row.url}</a>
                  </TableCell>
                  <TableCell> {row.id} </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </DocumentModalStyles>
  );
};
