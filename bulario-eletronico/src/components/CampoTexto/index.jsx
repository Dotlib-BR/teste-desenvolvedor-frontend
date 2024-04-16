import styled from "styled-components"
import { useMedicamentos } from "../../context/MedicamentosContext";

const ContainerEstilizado = styled.div`
    display: flex;
    flex-direction: column;
`;

const CampoTituloEstilizado = styled.label`
    font-size: 2rem;
    color: #000000;
    font-weight: 700;
    margin-bottom: .5rem;
    
    @media screen and (max-width: 768px) {
        text-align: center;
    }
`

const CampoContainerEstilizadoInput = styled.div`
    display: flex;
    gap: 1.5rem;
    @media screen and (max-width: 768px) {
        justify-content: center;
    }
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
        color: #ffffff;
    }
    &:focus {
        outline: none;
        background-color: white;
    }

    @media screen and (max-width: 768px) {
        max-width: 18rem;
        &::placeholder {
            font-size: 1rem;
        }
    }

`;

const CampoTexto = ({ titulo, placeholder, setFiltro }) => {

    const { setFiltroInput } = useMedicamentos();

    return (
        <ContainerEstilizado>
            <CampoTituloEstilizado>{titulo}</CampoTituloEstilizado>
            <CampoContainerEstilizadoInput>
                <CampoTextoEstilizado  
                    placeholder={placeholder}
                    onChange={e => setFiltroInput(e.target.value)}
                    type="text"
                />
            </CampoContainerEstilizadoInput>
        </ContainerEstilizado>
    )
}

export default CampoTexto