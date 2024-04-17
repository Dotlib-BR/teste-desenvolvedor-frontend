import styled from "styled-components";

export const Table = styled.table`
    max-height: 500px;
    width: 100%;
    margin: 4rem 0;

    @media (max-width: 768px) {
        width: 700px;
    }

    @media (max-width: 425px) {
        display: flex;
        justify-content: center;
        height: 300px;
    }
`;

export const Thead = styled.thead`
    @media (max-width: 425px) {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
    }

`;

export const TableHead = styled.th`
    border: 1px solid gray;
    color: black;
    height: 50px;
    background-color: #357266;

    @media (max-width: 768px) {
        width: 150px;
    }

    @media (max-width: 425px) {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

export const TableBody = styled.tbody`
    @media (max-width: 425px) {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 250px;
    }

`;

export const TableRow = styled.tr`
    @media (max-width: 425px) {
        display: flex;
        flex-direction: column;
    }
`;

export const TableData = styled.td`
    border: 1px solid gray;
    color: black;
    text-align: center;
    height: 50px;
    width: 500px;
    background-color: #A3BBAD;

    @media (max-width: 768px) {
        width: 150px;
        font-size: 14px;
        font-weight: 600;
    }

    @media (max-width: 425px) {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 50px;
        width: 230px;
    }

    &.documents{
        color: #357266;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        width: 300px;

        @media (max-width: 1204px) {
            height: 102px;
        }

        @media (max-width: 768px) {
            width: 150px;
        }

        @media (max-width: 425px) {
            justify-content: center;
            height: 50px;
        }
        
    }
`;

export const ContainerArrowBack = styled.div`
    width: 90%;

    @media (max-width: 425px) {
        position: relative;
        left: -1.5rem;
        top: 2rem;
    }
    
`;

export const ContainerDocuments = styled.div`
`;
