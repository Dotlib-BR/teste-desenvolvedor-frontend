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

    --primary-color: #ccc;
    --secundary-color: #f5f5f5;
  }

  section.main-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 60px;
    font-size: 14px;

    margin: 20px;
  }

  table {
    width: 90vw;
    font-size: 15px;
  }

  thead {
    height: 50px;
  }

  tr {
    height: 30px;
    cursor: pointer;
    text-align: center;
  }

  tbody tr:hover {
    background-color: var(--secundary-color);
  }

  h1 {
    font-size: 35px;
  }

`