import axios from "axios"
import { useEffect, useState } from "react"
import styled from "styled-components"
import CardMedicamento from "../CardMedicamento";
import { useMedicamentos } from "../../context/MedicamentosContext";

const SecaoEstilizado = styled.section`
    margin-bottom: 2rem;
`;

const SecaoCardEstilizado = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-inline: 1rem;
    align-items: center;
    justify-content: center;
`;

const SecaoBotaoContainerEstilizado = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
`

const SecaoBotaoEstilizado = styled.button`
    background-color: #000000;
    border: 1px solid transparent;
    color: #ffffff;
    padding: 0.5rem 1.5rem;
    cursor: pointer;
    &:hover {
        border-color: #000000;
        background-color: #ffffff;
        color: #000000;
    }
`;

const SecaoMedicamentos = () => {
    
    const { medicamentos, numeroPagina, totalPaginas, setNumeroPagina } = useMedicamentos();

    return (
        <SecaoEstilizado>
            <SecaoCardEstilizado>
                {
                    medicamentos.map((medicamento) => 
                        <CardMedicamento 
                            key={medicamento.id}
                            publicado={medicamento.published_at}
                            nome={medicamento.name}
                            company={medicamento.company}
                            principio={medicamento.active_principles[0]?.name}
                            pdf={medicamento.documents}                        
                        />
                    )
                }
            </SecaoCardEstilizado>
            <SecaoBotaoContainerEstilizado>
                {numeroPagina > 1 && <SecaoBotaoEstilizado onClick={e => setNumeroPagina(numeroPagina - 1)}>Voltar</SecaoBotaoEstilizado>}
                {numeroPagina < totalPaginas && <SecaoBotaoEstilizado onClick={e => setNumeroPagina(numeroPagina + 1)}>Proximo</SecaoBotaoEstilizado>}
            </SecaoBotaoContainerEstilizado>
        </SecaoEstilizado>
    )
}

export default SecaoMedicamentos