import styled from "styled-components"
import CampoTexto from "../CampoTexto"
import CampoFiltro from "../CampoFiltro"

const HeaderEstilizado = styled.header`
    padding: 60px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
        max-width: 212px;
    }
`

const Cabecalho = ({setFiltroInput}) => {
    return (
        <HeaderEstilizado>
            <CampoTexto 
                titulo="Consultar bulas de medicamentos"
                setFiltro={setFiltroInput} 
                placeholder="Digite o nome do medicamento ou laboratório" 
            />
            <CampoFiltro
                titulo="Ordenar por"
            />
        </HeaderEstilizado>
    )
}

export default Cabecalho