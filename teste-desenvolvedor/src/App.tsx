import React, { useEffect, useState } from 'react';

import './App.css';

import { IMedicamentos, MedicamentosService } from './app/services/medicamentos/MedicamentosService.ts'
import { ApiException } from './app/services/api/ApiException.ts';

function App() {
  const [lista, setLista] = useState<IMedicamentos[]>([]);

  useEffect(() => {
    MedicamentosService.getAll().then((result) => {
      if(result instanceof ApiException) {
        alert(result.message);
      } else {
        setLista(result);
      }
    })
  }, []);

  return (
    <div className="App">
      <h1>Listagem de Medicamentos</h1>
      <ol>
        {lista.map((lisItem, index) => {
          return <li key={lisItem.id}>
            {lisItem.name}
          </li>
        })}
      </ol>
    </div>
  );
}

export default App;
