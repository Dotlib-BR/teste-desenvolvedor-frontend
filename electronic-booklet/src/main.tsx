import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { Router } from './routes/routes'
import './styles/main.sass'
import { ApiProvider } from './context/api-provider'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ApiProvider>
            <RouterProvider router={Router} />
        </ApiProvider>
    </React.StrictMode>,
)
