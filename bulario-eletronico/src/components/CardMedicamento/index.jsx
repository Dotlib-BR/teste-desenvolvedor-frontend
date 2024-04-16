import React from 'react'
import styled from 'styled-components';

const CardContainerEstilizado = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: .5rem;
    margin: 1rem;
    background-color: #ffffff;
    width: 16rem;
    height: 20rem;
    padding: 1.5rem;
    border-radius: 1rem;
    box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.3);
`;

const CardDataEstilizado = styled.h2`
    margin: 0;
    position: absolute;
    top: .5rem;
    right: .5rem;
    font-size: 1rem;
`

const CardLabelEstilizado = styled.label`
    font-size: 1.5rem;
    font-weight: bold;
`;

const CardSpanEstilizado = styled.span`
    font-size: 1rem;
    font-weight: normal;
    max-width: 15rem;
    word-wrap: break-word;
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

const CardMedicamento = ({ nome, publicado, company, principio, pdf }) => {
  return (
    <CardContainerEstilizado>
        <CardDataEstilizado>{publicado.slice(0,10)}</CardDataEstilizado>
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