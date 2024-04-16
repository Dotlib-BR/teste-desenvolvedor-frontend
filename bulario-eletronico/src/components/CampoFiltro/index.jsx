import styled from "styled-components"

const ContainerEstilizado = styled.div`
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 768px) {
        align-items: center;
    }
`;

const CampoFiltroTituloEstilizado = styled.label`
    font-size: 2rem;
    color: #000000;
    font-weight: 700;
    margin-bottom: .5rem;
`

const CampoFiltroEstilizadoSelect = styled.select`
    height: 3.5rem;
    padding: .75rem 1rem;
    border: 2px solid #000000;
    width: 15rem;
    background: #000000;
    box-sizing: border-box;
    color: #ffffff;
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 1.5rem;
    
    &::placeholder {
        color: #8e8e8e;
    }
    
`;

const CampoFiltroEstilizadoOption = styled.option`
    background: #ffffff;
    color: #000000;
`

const CampoFiltro = ({ titulo, setOrdenar, ordenar }) => {
    return (
        <ContainerEstilizado>
            <CampoFiltroTituloEstilizado htmlFor="select-ordenar" >{titulo}</CampoFiltroTituloEstilizado>
            <CampoFiltroEstilizadoSelect
                name="select-ordenar" 
                id="select-ordenar"
                value={ordenar}
                onChange={e => setOrdenar(e.target.value)}
            >
                <CampoFiltroEstilizadoOption value=""></CampoFiltroEstilizadoOption>
                <CampoFiltroEstilizadoOption value="data">Por data</CampoFiltroEstilizadoOption>
                <CampoFiltroEstilizadoOption value="company">Por laboratório</CampoFiltroEstilizadoOption>
            </CampoFiltroEstilizadoSelect>
        </ContainerEstilizado>
    )
}

export default CampoFiltro