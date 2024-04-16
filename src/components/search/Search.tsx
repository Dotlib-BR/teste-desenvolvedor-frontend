
import { ChangeEvent, useEffect, useState } from 'react';
import './Search.scss';

import { getDataByNameOrLab } from '../../services/axios';
import { ToastContainer } from 'react-toastify';

export const Search = () => {

  const [value, setValue] = useState<string>('');

  useEffect(() => {

  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setValue(value);
    getDataByNameOrLab(value);
  };

  return (
    <>
      <main>
        <h1> Procure fármacos ou laboratórios que atendam sua necessidade. </h1>
        <input
          type="input"
          value={value}
          onChange={handleChange}
          placeholder='  Ex: amoxicilina ou medlabs' />
      </main>
      <ToastContainer 
          position="bottom-right"
          closeOnClick
          limit={ 2 }
          className='toastSend'
      />
    </>
  );
}