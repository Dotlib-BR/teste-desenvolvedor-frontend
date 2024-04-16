import styled from 'styled-components'
import EstilosGlobais from "./components/EstilosGlobais"
import { useEffect, useState } from 'react'
import SecaoMedicamentos from './components/SecaoMedicamentos'
import axios from 'axios'
import Filtro from './components/Filtro'
import { MedicamentosProvider } from './context/MedicamentosContext'

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
  
  return (
    <FundoGradiente>
      <EstilosGlobais />
      <AppContainer>
        <MedicamentosProvider>
          <Filtro />
          <SecaoMedicamentos />
        </MedicamentosProvider>
      </AppContainer>
    </FundoGradiente>
  )
}

export default App
