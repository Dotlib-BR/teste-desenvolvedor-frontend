import { createGlobalStyle, styled } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }

    body{
        min-height: 100vh;
        overflow: hidden;

        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        background-color: ${(props) => props.theme.secondary};
    }

    body::-webkit-scrollbar{
        display: none;
    }

    *::-webkit-scrollbar{
        width: .5rem;
    }

    *::-webkit-scrollbar-track{
        background-color: ${(props) => props.theme.quartiary};
        margin-block: 20px;
        border-radius: 20px;
    }
    *::-webkit-scrollbar-thumb{
        background-color: ${(props) => props.theme.primary};
        border-radius: 20px;
    }
`;

export const Container = styled.div`
  height: 100vh;
  width: 100%;

  display: flex;
  justify-content: center;
  align-content: center;
`;
