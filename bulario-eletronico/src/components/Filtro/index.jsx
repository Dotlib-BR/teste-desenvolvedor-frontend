import styled from "styled-components"
import CampoTexto from "../CampoTexto"
import CampoFiltro from "../CampoFiltro"

const HeaderEstilizado = styled.div`
    padding: 60px 0;
    display: flex;
    margin-inline: 1.5rem;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    img {
        max-width: 212px;
    }
    
    @media screen and (max-width: 768px) {
        justify-content: center;
    }
`

const FiltrarContainerEstilizado = styled.form`
    margin-bottom: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
`

const BotaoContainerEstilizado = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    
    @media screen and (max-width: 768px) {
        justify-content: center;
    }
`

const CampoTextoBotaoEstilizado = styled.button`
    font-size: 1.25rem;
    background-color: #ffffff;
    color: #000000;
    border-radius: 10px;
    &:hover {
        background-color: #000000;
        color: #ffffff;
        cursor: pointer;
    }
`

const Filtro = ({setFiltroInput, filtroInput, setOrdenarFiltro, ordenar }) => {


    const testarFuncao = (e) => {
        e.preventDefault()
        console.log('Filtro: ', filtroInput, 'Ordem:', ordenar, )
    }
   

    return (
        <HeaderEstilizado>
            <FiltrarContainerEstilizado onSubmit={testarFuncao}>
                <CampoTexto 
                    titulo="Consultar bulas de medicamentos"
                    setFiltro={setFiltroInput} 
                    placeholder="Digite o nome do medicamento ou laboratório"
                />
                <CampoFiltro
                    titulo="Ordenar por"
                    setOrdenar={setOrdenarFiltro}
                />
            </FiltrarContainerEstilizado>
        </HeaderEstilizado>
    )
}

export default Filtro