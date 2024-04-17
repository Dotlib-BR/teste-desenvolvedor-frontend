import styled from "styled-components";

export const Table = styled.table`
    // border: 1px solid red;
    max-height: 500px;
    width: 100%;
    border-radius: 10px;
`;

export const Thead = styled.thead`
    border: 1px solid blue;
`;

export const TableHead = styled.th`
    border: 1px solid gray;
    color: black;
    height: 50px;
    border-radius: 10px;
`;

export const TableBody = styled.tbody`
    border: 1px solid yellow;
`;

export const TableRow = styled.tr`
    border: 1px solid pink;
`;

export const TableData = styled.td`
    border: 1px solid gray;
    color: black;
    text-align: center;
    border-radius: 10px;
    height: 50px;
    width: 500px;

    &.documents{
        color: #D15452;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        width: 300px;
        
    }
`;

export const ContainerArrowBack = styled.div`
    border: 1px solid red;
    width: 90%;
`;

export const ContainerDocuments = styled.div`
`;
