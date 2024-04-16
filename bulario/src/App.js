import './App.css';
import List from './components/list/list'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [list, setList] = useState([]);
  const [pages, setPages] = useState(0);
  const fetching = (params) => {
    axios.get('http://localhost:3000/data' + params)
      .then(response => {
        setList(response.data.data);
        setPages(response.data.num_pages)
      })
      .catch(error => {
        console.error(error);
      });
  }
  useEffect(() => {
      fetching("?_page=0");
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
      <div>{pages}</div>
    </div>
  );
}

export default App;
