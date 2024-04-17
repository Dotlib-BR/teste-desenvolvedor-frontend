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
import { ActivePrinciplesModalStyles } from './styles';
import { IDataActivePrinciples } from '../showData';
import { inter } from '@/pages';

interface IActivePrinciplesModal {
  data: IDataActivePrinciples[];
  close: () => void;
}

export const ActivePrinciplesModal = ({
  data,
  close,
}: IActivePrinciplesModal): React.ReactNode => {
  return (
    <ActivePrinciplesModalStyles>
      <div id="active-principles-modal-content">
        <h3 className={inter.className}>informações dos principios ativos</h3>
        <button id="active-principles-modal-button" onClick={close}>
          <CloseIcon />
        </button>
        <TableContainer component={Paper}>
          <Table size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>name</TableCell>
                <TableCell>ID</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <TableRow key={row.name}>
                  <TableCell> {row.name} </TableCell>
                  <TableCell> {row.id} </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </ActivePrinciplesModalStyles>
  );
};
