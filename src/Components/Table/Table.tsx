import React from 'react'
import { Medication } from '../../Context/DataContext'
import Loading from '../Helper/Loading/Loading';
import Leaflet from './Leaflet/Leaflet';
import PublishedAt from './PublishedAt/PublishedAt';
import styles from './Table.module.css';
import useFetch from '../../Hooks/useFetch';
import NavPages from './NavPages/NavPages';
import orderBy from '../../Functions/orderBy';
import { useNavigate } from 'react-router-dom';

export interface DataPages{
  data: Medication[];
  first: number;
  items: number;
  last: number;
  next: number | null;
  pages: number;
  prev: number | null;
}

const Table = () => {
  const navigate = useNavigate();
  const [page, setPage] = React.useState(1);
  const {data, loading} = useFetch<DataPages>(`http://localhost:3000/data?_page=${page}`);
  const [newData, setNewData] = React.useState<DataPages | null>(null);

  function handleNav(id: string) {
    navigate(`medication/${id}`);
  }
  
  React.useEffect(()=> {
    if(data) {
      setNewData({...data, data: orderBy(data.data)});
    }
  }, [data]);

  if(loading) return <Loading/>
  if(!newData) return null;

  return (
    <>
      <div className={styles.Table}>
        <h1>Todas as Bulas</h1>
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
            {newData.data.map((item)=> 
            <tr key={item.id}>
              <td onClick={()=> handleNav(item.id)}>{item.name}</td>
              <td>{item.company}</td>
              <PublishedAt data={item.published_at} />
              <Leaflet data={item.documents}/> 
            </tr>)}
          </tbody>
        </table>
      </div>
      <NavPages data={newData} page={page} setPage={setPage}/>
    </>
  )
}

export default Table;