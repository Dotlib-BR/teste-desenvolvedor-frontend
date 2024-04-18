import DataTable from 'react-data-table-component';
import moment from 'moment';

const columns = [
    {
      name: <span style={{ fontSize: '15px', fontWeight:650 }}>MEDICAMENTO</span>,
      selector: row => row.name,
    },
  
    {
      name: <span style={{ fontSize: '15px', fontWeight: 650 }}>LABORATÓRIO</span>,
      selector: row => row.company
    },
  
    {
      name: <span style={{ fontSize: '15px', fontWeight: 650 }}>DATA</span>,
      selector: row => moment(row.published_at).format('DD/MM/YYYY HH:mm')
    },
]

function Datatable({medicamentosFiltrados}) {
    return (
        <DataTable
            columns={columns}
            data={medicamentosFiltrados}
            pagination
        />
    );
}

export default Datatable