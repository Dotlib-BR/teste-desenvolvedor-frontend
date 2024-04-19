import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    align-items: center;
    gap: 10px;
`

export const Input = styled.input`
    padding: 10px;
    border-radius: 10px;
    border: solid 2px ${(props) => props.theme.primary};
`

export const IconButton = styled.button`
    display: flex;
    justify-content: center;

    background: transparent;
    border: none;

    cursor: pointer;
`