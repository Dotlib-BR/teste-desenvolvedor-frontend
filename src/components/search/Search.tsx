
import { ChangeEvent, useContext } from 'react';
import './Search.scss';
import './MediasSearch.scss'; 

import { ToastContainer } from 'react-toastify';
import { DataContext } from '../../context/DataContext';

export const Search = () => {
  const { getDataByNameOrLab, searched_value, setSearched_value } = useContext(DataContext);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    getDataByNameOrLab(value);
    setSearched_value(value);
  };

  return (
    <>
      <main>
        <h1> Encontre fármacos ou laboratórios que atendam sua necessidade. </h1>
        <input
          type="input"
          value={searched_value}
          onChange={handleChange}
          placeholder=' Pesquisar...' />
      </main>
      <ToastContainer 
        position="bottom-right"
        closeOnClick
        limit={ 1 }
        className='toastSend'
      />
    </>
  );
}