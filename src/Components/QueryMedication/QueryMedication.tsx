import { useData } from '../../Context/DataContext';
import Input from '../Form/Input/Input';
import styles from './QueryMedication.module.css';
import Table from '../Table/Table';
import SearchTable from '../SearchTable/SearchTable';
import SearchBtn from '../../assets/SearchBtn';

const QueryMedication = () => {

  const {search, setSearch} = useData();

  return (
    <form className={styles.form}>
      <div className={styles.container1}>
        <h2>Consultar Bula <SearchBtn color='#4CABDF'/></h2>
        <div className={styles.organizeInput}>
          <Input 
            value={search} 
            onChange={({target})=> setSearch(target.value)}
            placeholder='Busque por medicamento ou empresa' 
          />
        </div>
      </div>
      {search ? <SearchTable/> : <Table/>}
    </form>
  )
}

export default QueryMedication;