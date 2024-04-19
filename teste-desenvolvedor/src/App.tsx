import React, { useEffect, useMemo, useState } from 'react';
import { FaSearch } from "react-icons/fa";

import './App.css';
import 'styled-components'

import { IMedicamentos, MedicamentosService } from './app/services/medicamentos/MedicamentosService.ts'
import { ApiException } from './app/services/api/ApiException.ts';
import DataTable from './app/components/Datatable.js';
import ButtonDownload from './app/components/ButtonDownload.js';


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

  const medicamentosFiltrados = useMemo (() => {
    const upperBusca = busca.toUpperCase();

    return listaOrdem.filter((medicamento) => medicamento.name.toUpperCase().includes(upperBusca) || medicamento.company.includes(upperBusca));
  }, [busca, listaOrdem]); 


  return (
    <div>
      <div className="header">
        <ButtonDownload />
        <img src={"medicamento_logo.png"} alt="logo" />
      </div>
      <div className="App">
      <div className="" id="divBusca">
        <input 
          type='text'
          value={busca}
          placeholder='Pesquisa...'
          id="txtBusca"
          onChange={(ev) => setBusca(ev.target.value)}
        />
        <FaSearch id="search-icon"/>
      </div>

      <DataTable medicamentosFiltrados={medicamentosFiltrados} />
    </div>
    </div>
  );
}

export default App;
