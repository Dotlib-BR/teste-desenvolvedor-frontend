import React, { useEffect, useMemo, useState } from 'react';

import './App.css';

import { IMedicamentos, MedicamentosService } from './app/services/medicamentos/MedicamentosService.ts'
import { ApiException } from './app/services/api/ApiException.ts';

function App() {
  const [lista, setLista] = useState<IMedicamentos[]>([]);
  const [busca, setBusca] = useState('');
  const [listaOrdem, setOrdemLista] = useState<IMedicamentos[]>([]);
  

  useEffect(() => {
    MedicamentosService.getAll().then((result) => {
      if(result instanceof ApiException) {
        alert(result.message);
      } else {
        setLista(result);
        const listaOrdenada = () => {
          lista.sort((a, b) => a.published_at.localeCompare(b.published_at));
          setOrdemLista(lista);
        }

        listaOrdenada();
      }
    })
  });

  //const medicamentosFiltrados = useMemo (() => {
    const upperBusca = busca.toUpperCase();

    const medicamentosFiltrados =  listaOrdem.filter((medicamento) => medicamento.name.toUpperCase().includes(upperBusca) || medicamento.company.includes(upperBusca));
  //}, [busca]); 

  return (
    <div className="App">
      <h1>Listagem de Medicamentos</h1>
      <input 
        type='text'
        value={busca}
        onChange={(ev) => setBusca(ev.target.value)}
      />
      <ol>
        {medicamentosFiltrados.map((lisItem) => {
          return <li key={lisItem.id}>
            {lisItem.published_at}
          </li>
        })}
      </ol>
    </div>
  );
}

export default App;
