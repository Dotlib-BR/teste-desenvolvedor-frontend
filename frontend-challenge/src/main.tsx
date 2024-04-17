import "./styles/global.sass"
import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { MedicationsProvider } from "./store/MedicationsContext"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <MedicationsProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </MedicationsProvider>
)
