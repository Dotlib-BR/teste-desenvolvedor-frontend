import styled from "styled-components";

export const ContainerPagination = styled.div`
    width: 400px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 30px;
`;

export const ButtonPagination = styled.button`
    width: 70px;
    height: 30px;
    border-radius: 10px;
    cursor: pointer;
    background-color: #357266;
    border: none;
    &:disabled {
        cursor: not-allowed;
        background-color: gray;
    }
`;

export const TextPagination = styled.span``;