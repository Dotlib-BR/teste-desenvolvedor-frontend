import styled from "styled-components";

export const ContainerSearchBar = styled.div`
    width: 400px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-around;

`;

export const InputSearchBar = styled.input`
    width: 300px;
    height: 40px;
    border-radius: 10px;
    background-color: #fff;
    border: 1px solid gray;
    padding: 0 10px;
    color: black;
    font-size: 16px;
    outline: none;
`;

export const ButtonSearchBar = styled.button`
    width: 80px;
    height: 30px;
    border-radius: 10px;
    background-color: #357266;
    border: none;
    cursor: pointer;
`;