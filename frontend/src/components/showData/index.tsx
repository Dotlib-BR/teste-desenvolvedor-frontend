import { SearchContext } from '@/contexts/searchContext';
import { useContext, useLayoutEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import { ShowDataStyles } from './styles';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import Paper from '@mui/material/Paper';
import { inter } from '@/pages';
import { DocumentsModal } from '../documentsModal';
import { ActivePrinciplesModal } from '../activePrinciples';
import { Pagination } from '@mui/material';
import { useApi } from '@/hooks/useApi';
import { usePDF } from 'react-to-pdf';

export interface IDataDocument {
  id: string;
  expedient: number;
  type: string;
  url: string;
}

export interface IDataActivePrinciples {
  id: string;
  name: string;
}

export interface IData {
  first: number;
  prev: null | number;
  next: null | number;
  last: number;
  pages: number;
  items: number;
  data: {
    id: string;
    name: string;
    published_at: string;
    company: string;
    documents: IDataDocument[];
    active_principles: IDataActivePrinciples[];
  }[];
}

export const ShowData = (): React.ReactNode => {
  const { data, inputValue, searchType, setData, page, setPage } =
    useContext(SearchContext);

  const fetchData = useApi();

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const [modal, setModal] = useState<{ type: 'doc' | 'active'; key: number }>({
    type: 'doc',
    key: 0,
  });

  const { toPDF, targetRef } = usePDF({ filename: 'page.pdf' });

  function openModal(mType: typeof modal) {
    setModal(mType);
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  function Modal({ index, type }: { index: number; type: 'doc' | 'active' }) {
    if (type == 'doc') {
      return createPortal(
        <DocumentsModal
          data={data!.data[index].documents}
          close={closeModal}
        />,
        document.body,
      );
    }

    return createPortal(
      <ActivePrinciplesModal
        data={data!.data[index].active_principles}
        close={closeModal}
      />,
      document.body,
    );
  }

  async function handleChangePage(
    _: React.ChangeEvent<unknown>,
    value: number,
  ) {
    const result = await fetchData({
      searchType,
      searchValue: inputValue,
      page: value,
    });
    setData(result);
    setPage(value);
  }

  function sortData(data: IData['data']): IData['data'] {
    const newData = Array.from(data);
    newData.sort((a: IData['data'][number], b: IData['data'][number]) => {
      return (
        new Date(a.published_at).getTime() - new Date(b.published_at).getTime()
      );
    });

    return newData;
  }

  useLayoutEffect(() => {
    if (data) {
      data.data.sort((a: IData['data'][number], b: IData['data'][number]) => {
        return (
          new Date(a.published_at).getTime() -
          new Date(b.published_at).getTime()
        );
      });
    }
  }, [data, data?.data]);

  return (
    <ShowDataStyles>
      {data && data?.data.length > 0 ? (
        <TableContainer component={Paper} ref={targetRef}>
          <button className="pdf" onClick={() => toPDF()}>
            <span>exportar PDF</span> <PictureAsPdfIcon />
          </button>
          <Table size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>Nome</TableCell>
                <TableCell>Empresa</TableCell>
                <TableCell>Documentos</TableCell>
                <TableCell>Principios Ativos</TableCell>
                <TableCell>ID</TableCell>
                <TableCell>Data de Publicação</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sortData(data.data).map((row, key) => (
                <TableRow
                  key={key}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.company}</TableCell>
                  <TableCell
                    className="iteractive-item"
                    onClick={() => openModal({ type: 'doc', key: key })}
                  >
                    {row.documents.length}
                  </TableCell>
                  <TableCell
                    className="iteractive-item"
                    style={{ cursor: 'pointer' }}
                    onClick={() => openModal({ type: 'active', key: key })}
                  >
                    {row.active_principles.length}
                  </TableCell>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.published_at.split('T')[0]}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          {isModalOpen && <Modal index={modal.key} type={modal.type} />}

          <Pagination
            id="pagination"
            count={data.last}
            page={page}
            onChange={handleChangePage}
            color="primary"
          />
        </TableContainer>
      ) : (
        <div>
          <h2 className={inter.className}>
            Nenhuma informação para ser exibida.
          </h2>
          <h3 className={inter.className}>
            Busque pelo nome do medicamento ou empresa responsavel.
          </h3>
        </div>
      )}
    </ShowDataStyles>
  );
};
