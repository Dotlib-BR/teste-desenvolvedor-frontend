
import { ChangeEvent, useState, useContext } from 'react';
import './Search.scss';
import './MediasSearch.scss'; 

import { ToastContainer } from 'react-toastify';
import { DataContext } from '../../context/DataContext';

export const Search = () => {
  const { getDataByNameOrLab } = useContext(DataContext);
  const [value, setValue] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setValue(value);
    getDataByNameOrLab(value);
  };

  return (
    <>
      <main>
        <h1> Encontre fármacos ou laboratórios que atendam sua necessidade. </h1>
        <input
          type="input"
          value={value}
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