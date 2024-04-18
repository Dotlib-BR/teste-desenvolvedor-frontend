import { useNavigate, useParams } from 'react-router-dom';
import useFetch from '../../Hooks/useFetch';
import Loading from '../Helper/Loading/Loading';
import { Medication } from '../../Context/DataContext';
import PublishedAt from '../Table/PublishedAt/PublishedAt';
import Leaflet from '../Table/Leaflet/Leaflet';
import styles from './MedicationComponent.module.css'
import Button from '../Form/Button/Button';


const MedicationComponent = () => {
  const navigate = useNavigate();
  const {id} = useParams();
  const {data, loading} = useFetch<Medication>(`http://localhost:3000/data/${id}`);

  function handleNavigate() {
    navigate('/');
  }

  if(loading) return <Loading/>;
  if(!data) return null;

  return (
    <div className={styles.Medication}>
      <Button name='Voltar' onClick={handleNavigate}/>
      <div className={styles.Table}>
        <h1>Detalhe do Produto: {data.name}</h1>
        <table>
          <tbody>
            <tr>
              <th>Nome da Empresa Detentora do Registro</th>
              <td>{data.company}</td>
            </tr>
            <tr>
              <th>Nome Comercial</th>
              <td>{data.name}</td>
            </tr>
            <tr>
              <th>Principal Ativo</th>
              <td>{data.active_principles.map((item)=> item.name)}</td>
            </tr>
            <tr>
              <th>Data da Publicação</th>
              <PublishedAt data={data.published_at}/>
            </tr>
            <Leaflet data={data.documents} expedient={true}/>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default MedicationComponent;