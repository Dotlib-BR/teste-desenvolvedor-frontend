import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import LeafletProvider from './context/LeafletContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LeafletProvider>
      <App />
    </LeafletProvider>
  </React.StrictMode>
)
