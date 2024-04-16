import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const MedicamentosContext = createContext();

export const useMedicamentos = () => useContext(MedicamentosContext);

export const MedicamentosProvider = ({ children }) => {
  const [medicamentos, setMedicamentos] = useState([]);
  const [numeroPagina, setNumeroPagina] = useState(1);
  const [totalPaginas, setTotalPaginas] = useState(0);
  const [filtroInput, setFiltroInput] = useState('');
  const [ordenarFiltro, setOrdenarFiltro] = useState('');
  const tamanhoPagina = 10;

  useEffect(() => {
    axios.get('http://localhost:3000/data')
      .then(resposta => {
        let dadosOrdenados = resposta.data.sort((a, b) => {
          return new Date(b.published_at) - new Date(a.published_at);
        });

        let filteredData = dadosOrdenados;

        if (filtroInput) {
          filteredData = dadosOrdenados.filter(medicamento => medicamento.name.toLowerCase().includes(filtroInput.toLowerCase()) || medicamento.company.toLowerCase().includes(filtroInput.toLowerCase()));
        }

        if (ordenarFiltro === 'company') {
          filteredData = filteredData.sort((a, b) => a.company.toLowerCase() < b.company.toLowerCase() ? -1 : 1);
        }

        setTotalPaginas(Math.ceil(filteredData.length / 10));

        const indiceInicial = (numeroPagina - 1) * tamanhoPagina;
        const indiceFinal = indiceInicial + tamanhoPagina;

        setMedicamentos(filteredData.slice(indiceInicial, indiceFinal));
      })
      .catch(error => {
        console.log(error);
      });
  }, [numeroPagina, filtroInput, ordenarFiltro]);

  return (
    <MedicamentosContext.Provider
      value={{
        medicamentos,
        setMedicamentos,
        numeroPagina,
        setNumeroPagina,
        totalPaginas,
        filtroInput,
        setFiltroInput,
        ordenarFiltro,
        setOrdenarFiltro,
      }}
    >
      {children}
    </MedicamentosContext.Provider>
  );
};
