import React from 'react'
import styled from 'styled-components';

const CardContainerEstilizado = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: .5rem;
    margin: 1rem;
    background-color: #ffffff;
    width: 16rem;
    height: 18rem;
    padding: 1.5rem;
    border-radius: 1rem;
    box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.3);
`;

const CardLabelEstilizado = styled.label`
    font-size: 1.5rem;
    font-weight: bold;
`;

const CardSpanEstilizado = styled.span`
    font-size: 1rem;
    font-weight: normal;
`;

const CardPDFEstilizado = styled.div`
    display: flex;
    justify-content: space-between;
`

const CardLinkEstilizado = styled.a`
    background-color: #000000;
    color: #ffffff;
    text-decoration: none;
    padding: .5rem;
    border-radius: .5rem;
    border: 1px solid transparent;
    &:hover {
        border-color: #000000;
        background-color: #ffffff;
        color: #000000;
    }
`

const CardMedicamento = ({ nome, company, principio, pdf }) => {
  return (
    <CardContainerEstilizado>
        <CardLabelEstilizado>Nome:</CardLabelEstilizado>
        <CardSpanEstilizado>{nome}</CardSpanEstilizado>
        <CardLabelEstilizado>Laboratório:</CardLabelEstilizado>
        <CardSpanEstilizado>{company}</CardSpanEstilizado>
        <CardLabelEstilizado>Princípios:</CardLabelEstilizado>
        <CardSpanEstilizado>{principio}</CardSpanEstilizado>
        <CardLabelEstilizado>PDFs:</CardLabelEstilizado>
        <CardPDFEstilizado>
            <CardLinkEstilizado href={pdf[0].url} >{pdf[0].type}</CardLinkEstilizado>
            <CardLinkEstilizado href={pdf[1].url} >{pdf[1].type}</CardLinkEstilizado>
        </CardPDFEstilizado>
    </CardContainerEstilizado>
  )
}

export default CardMedicamento