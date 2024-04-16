import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { getRemedioPaginado } from './services/remedios'

function App() {
    const [count, setCount] = useState(0)

    async function carregaDados(pagina: number) {

        const response = await getRemedioPaginado(pagina);
        console.log("request", response);
    } 

    useEffect(() => {
        carregaDados(1);
        carregaDados(2);
        carregaDados(3);
    }, []);

    return (
        <>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    )
}

export default App
