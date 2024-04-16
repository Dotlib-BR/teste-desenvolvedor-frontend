import styled from 'styled-components'
import EstilosGlobais from "./components/EstilosGlobais"
import { useEffect, useState } from 'react'
import SecaoMedicamentos from './components/SecaoMedicamentos'
import axios from 'axios'
import Filtro from './components/Filtro'

const FundoGradiente = styled.div`
  background: linear-gradient(174.61deg, #47d035 0%, #76d66a 13.16%, #e0f9dd 31%, #ffffff 48.76%);
  width: 100%;
  min-height: 100vh;
`

const AppContainer = styled.div`
  width: 1440px;
  margin: 0 auto;
  max-width: 100%;
`

const App = () => {

  const [medicamentos, setMedicamentos] = useState([])



  const [numeroPagina, setNumetoPagina] = useState(1)
  const tamanhoPagina = 10
  const [totalPaginas, setTotalPaginas] = useState()
  const [filtroInput, setFiltroInput] = useState('')
  const [ordenarFiltro, setOrdenarFiltro] = useState('')

  useEffect(() => {
    axios.get(`http://localhost:3000/data`)
      .then(resposta => {
        let dadosOrdenados = resposta.data.sort((a, b) => {
          return new Date(b.published_at) - new Date(a.published_at)
        })
        
        setTotalPaginas(Math.ceil(resposta.data.length / 10))
  
        if (filtroInput) {
          dadosOrdenados = dadosOrdenados.filter(medicamento => medicamento.name.toLowerCase().includes(filtroInput.toLowerCase()) || medicamento.company.toLowerCase().includes(filtroInput.toLowerCase()))
          setTotalPaginas(Math.ceil(dadosOrdenados.length / 10))
        }

        if (ordenarFiltro) {

          if (ordenarFiltro === 'company') {
            dadosOrdenados = dadosOrdenados.sort((a, b) => ((a.company.toLowerCase() < b.company.toLowerCase()) ? -1 : 1))
          }
          
        }

        const indiceInicial = (numeroPagina - 1) * tamanhoPagina
        const indiceFinal = indiceInicial + tamanhoPagina
        
        setMedicamentos(dadosOrdenados.slice(indiceInicial, indiceFinal))
  
      })
      .catch(error => {
        console.log(error)
      })
  }, [numeroPagina, filtroInput, ordenarFiltro]) 
  


  return (
    <FundoGradiente>
      <EstilosGlobais />
      <AppContainer>
        <Filtro setFiltroInput={setFiltroInput} filtroInput={filtroInput} setOrdenarFiltro={setOrdenarFiltro} ordenar={ordenarFiltro} medicamentos={medicamentos} setMedicamentos={setMedicamentos}/>
        <SecaoMedicamentos 
          medicamentos={medicamentos} 
          numeroPagina={numeroPagina}
          totalPaginas={totalPaginas}
          setNumetoPagina={setNumetoPagina}
        />
      </AppContainer>
    </FundoGradiente>
  )
}

export default App
