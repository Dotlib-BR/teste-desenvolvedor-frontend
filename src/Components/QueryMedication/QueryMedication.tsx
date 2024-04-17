import { useData } from '../../Context/DataContext';
import Input from '../Form/Input/Input';
import SearchBtn from '../../assets/SearchBtn';
import Button from '../Form/Button/Button';
import styles from './QueryMedication.module.css';
import Table from '../Table/Table';

const QueryMedication = () => {

  const {search, setSearch} = useData();

  return (
    <form className={styles.form}>
      <div className={styles.container1}>
        <h2>Consultar Bula</h2>
        <div className={styles.organizeInput}>
          <Input value={search} onChange={({target})=> setSearch(target.value)} />
          <Button><SearchBtn/></Button>
        </div>
      </div>
      <Table/>
    </form>
  )
}

export default QueryMedication;