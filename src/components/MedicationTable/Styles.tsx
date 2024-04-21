import styled from "styled-components"

type TableRowProps = {
  $hover: boolean
}

export const TableContainer = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;

  table {
    width: min(1200px, 90vw);
    font-size: 15px;
  }

  thead {
    height: 50px;
  }

  tr {
    height: 60px;
  }
  
  td {
    width: 33%;
  }
  `

export const TableRow = styled.tr<TableRowProps>`
  &:hover {
    ${({ $hover }) => $hover && 'cursor: pointer'};
    ${({ $hover }) => $hover && 'background-color: var( --main-color-hover)'};
  }
`