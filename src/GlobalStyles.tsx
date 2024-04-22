import { createGlobalStyle } from 'styled-components'
import { breakingPoints } from './utils/breakingPoints'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: 'poppins', sans-serif;
  }

  :root {
    --error: #ff0000;

    --primary-color: #26bb5a;
    --primary-color-hover: #a6ebbe;
    --secundary-color: #ccc;
    --secundary-color-hover: #f5f5f5;
  }

  h1 {
    font-size: 40px;
    text-align: center;
  }

  h3 {
    font-size: 30px;
    color: var(--primary-color);
    text-align: center;
  }

  p {
    font-size: 15px;
  }

  a, a:active, a:visited {
    font-size: 15px;
    text-decoration: none;
    color: var(--primary-color);

    &:hover {
      color: var(--primary-color);
    }
  }

  button {
    padding: 10px;
    font-size: 15px;
    cursor: pointer;
    border: 1px solid var(--primary-color);
    background-color: var(--primary-color);
    color: #f5f5f5;
    border-radius: 5px;

    &:hover {
      background-color: var(--primary-color-hover);
      color: #000;
    } 
  }

  @media (max-width: ${breakingPoints.sm}) {
    button, p, a, span, table {
      font-size: 12px; 
    }
  }
`