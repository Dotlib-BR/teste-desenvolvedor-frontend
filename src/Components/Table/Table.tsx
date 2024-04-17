import React from 'react'
import { useData } from '../../Context/DataContext'
import Loading from '../Helper/Loading/Loading';
import Leaflet from './Leaflet/Leaflet';
import PublishedAt from './PublishedAt/PublishedAt';
import styles from './Table.module.css';


const Table = () => {
  const {data, loading} = useData();

  if(loading) return <Loading/>
  if(!data) return null;

  return (
    <div className={styles.Table}>
      <div>Resultados da Consulta</div>
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
          {data.data.map((item)=> 
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.company}</td>
            <PublishedAt data={item.published_at} />
            <Leaflet data={item.documents}/> 
          </tr>)}
        </tbody>
      </table>
    </div>
  )
}

export default Table