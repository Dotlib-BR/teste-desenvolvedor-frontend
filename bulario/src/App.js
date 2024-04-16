import './App.css';
import List from './components/list/list'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [list, setList] = useState([]);
  const [pages, setPages] = useState(0);
  const [actualPage, setActualPage] = useState(0);
  const [pagination, setPagination] = useState([]);
  const fetching = (params) => {
    setActualPage(params);
    axios.get('http://localhost:3000/data?_page=' + params)
      .then(response => {
        setList(response.data.data);
        setPages(response.data.num_pages)
        let paginatioon = [];
        for(let i = 0; i < response.data.num_pages; i++)
          paginatioon.push(i);
        setPagination(paginatioon);
      })
      .catch(error => {
        console.error(error);
      });
  }
  useEffect(() => {
      fetching(0);
  }, []);
  return (
    <div>
      <div id='header'>
        <h1 id='title'>Bulário Eletrônico Online</h1>
        <div className='h-inp-conteiner'>
          <input className='h-inp' id='drug-name' placeholder='Nome do Medicamento'/>
          <input className='h-inp' id='company-name' placeholder='Nome do Laboratório'/>
          <button id='search-btn'>Pesquisar</button>
        </div>
      </div>
      <div className='ls-wrapper'>
        <List columns={['Nome', 'Laboratório', 'Data']} rows={list}></List>
      </div>
      <div id='pagination-container'>
        {pagination.map((i, index) => {
          return <button onClick={() => fetching(i)} className={'btn-pag '+(actualPage === i ? 'selected' : '')} key={index}>Página {i}</button>
        })}
      </div>
    </div>
  );
}

export default App;
