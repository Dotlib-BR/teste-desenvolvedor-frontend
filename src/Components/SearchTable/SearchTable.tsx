import React from 'react';
import { Medication, useData } from '../../Context/DataContext';
import Loading from '../Helper/Loading/Loading';
import PublishedAt from '../Table/PublishedAt/PublishedAt';
import Leaflet from '../Table/Leaflet/Leaflet';
import styles from '../Table/Table.module.css';
import orderBy from '../../Functions/orderBy';
import { useNavigate } from 'react-router-dom';

const styleNotFound: React.CSSProperties = {
  textAlign: "center",
  color: "var(--color-font)"
}

function searchFor(data: Medication[], contentSearch: string) {
  const escapedContentSearch = contentSearch.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(escapedContentSearch, 'i');

  return data.filter((item)=> regex.test(item.name) || regex.test(item.company));
}

const SearchTable = () => {
  const navigate = useNavigate();
  const {data, loading, search} = useData();
  const[newData, setNewData] = React.useState<Medication[] | null>(null);

  function handleNav(id: string) {
    navigate(`medication/${id}`);
  }

  React.useEffect(()=> {
    if(data && search) {
      setNewData(searchFor(orderBy(data), search));
    }
  }, [data, search]);

  if(loading) return <Loading/>
  if(!newData) return null;

  return (
    <>
      {newData.length === 0 ? 
        <p style={styleNotFound}>Não foi encontrado nenhum medicamento ou empresa.</p>
        :
        <div className={styles.Table}>
          <h1>Resultado da Consulta</h1>
          <table>
            <thead>
              <tr>
                <th>Medicamento</th>
                <th>Empresa</th>
                <th>Data de Publicação</th>
                <th>Bula do Paciente</th>
                <th>Bula do Profissional</th>
              </tr>
            </thead>
            <tbody>
              {newData.map((item)=> 
              <tr key={item.id}>
                <td onClick={()=> handleNav(item.id)}>{item.name}</td>
                <td>{item.company}</td>
                <PublishedAt data={item.published_at} />
                <Leaflet data={item.documents}/> 
              </tr>)}
            </tbody>
          </table>
        </div>
      }
    </>
  )
}

export default SearchTable;