import { createGlobalStyle, styled } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }

    body{
        min-height: 100vh;
        overflow: hidden;

        background-color: black;
        color: white;
    }
`;

export const Container = styled.div`
  height: 100vh;
  width: 100%;

  display: flex;
  justify-content: center;
  align-content: center;
`;
