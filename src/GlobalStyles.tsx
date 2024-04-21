import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: 'poppins', sans-serif;
  }

  :root {
    --error: #ff0000;

    --main-color: #26bb5a;
    --main-color-hover: #a6ebbe;
    --secundary-color: #ccc;
    --secundary-color-hover: #f5f5f5;
  }

  h1 {
    font-size: 40px;
    text-align: center;
  }

  h3 {
    font-size: 30px;
    color: var(--main-color);
    text-align: center;
  }

  p {
    font-size: 15px;
  }

  a, a:active, a:visited {
    font-size: 15px;
    text-decoration: none;
    color: #000;

    &:hover {
      color: var(--main-color);
    }
  }

  button {
    padding: 10px;
    font-size: 15px;
    cursor: pointer;
    border: 1px solid var(--main-color);
    background-color: var(--main-color);
    color: #f5f5f5;
    border-radius: 5px;

    &:hover {
      background-color: var(--main-color-hover);
      color: #000;
    } 
  }
`