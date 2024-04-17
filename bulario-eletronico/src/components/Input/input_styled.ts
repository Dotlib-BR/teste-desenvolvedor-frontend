import styled from "styled-components";

export const InputStyled = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  width: 30%;
  box-sizing: border-box;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: var(--blue-primary);
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 640px) {
    width: 100%;
  }
`;