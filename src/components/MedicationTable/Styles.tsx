import styled from "styled-components"

type TableRowProps = {
  $hover: boolean
}

export const TableContainer = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;

  table {
    width: min(1200px, 95vw);
  }

  thead {
    height: 50px;
  }

  tr {
    height: 60px;
  }

  th {
    cursor: pointer;

    &:hover {
      color: var(--primary-color);
    }
  }
  
  td:nth-child(1), th:nth-child(1) {
    width: 20%;
  }

  td:nth-child(2), th:nth-child(2) {
    width: 60%;
  }

  td:nth-child(3), th:nth-child(3) {
    width: 20%;
  }
`

export const TableRow = styled.tr<TableRowProps>`
  &:hover {
    ${({ $hover }) => $hover && 'cursor: pointer'};
    ${({ $hover }) => $hover && 'background-color: var( --primary-color-hover)'};
  }
`