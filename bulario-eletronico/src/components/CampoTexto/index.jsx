import styled from "styled-components"
import search from "./search.png"

const ContainerEstilizado = styled.div`
    display: flex;
    flex-direction: column;
    margin-inline: 1rem;
`;

const CampoTituloEstilizado = styled.label`
    font-size: 2rem;
    color: #000000;
    font-weight: 700;
    margin-bottom: .5rem;
`

const ContainerEstilizadoInput = styled.div`
    position: relative;
    display: inline-block;
`;

const CampoTextoEstilizado = styled.input`
    height: 3.5rem;
    padding: .75rem 1rem;
    border: 2px solid #000000;
    border-radius: 10px;
    width: 35rem;
    background: transparent;
    box-sizing: border-box;
    color: #000000;
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 1.5rem;
    
    &::placeholder {
        color: #8e8e8e;
    }
`;

const IconeLupa = styled.img`
    position: absolute;
    top: 9px;
    right: 10px;
    width: 2.5rem;
    height: 2.5rem;
`;

const CampoTexto = ({ titulo, placeholder, setFiltro}) => {
    return (
        <ContainerEstilizado>
            <CampoTituloEstilizado>{titulo}</CampoTituloEstilizado>
            <ContainerEstilizadoInput>
                <CampoTextoEstilizado  
                    placeholder={placeholder}
                    onChange={(e) => {setFiltro(e.target.value)}}
                />
                <IconeLupa src={search}  alt="Lupa"/>
            </ContainerEstilizadoInput>
        </ContainerEstilizado>
    )
}

export default CampoTexto