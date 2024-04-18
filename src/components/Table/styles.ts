import styled from 'styled-components'

export const StyledTable = styled.table`
  width: 100%;

  thead {
    background-color: ${(props) => props.theme['background-secondary']};
    border-collapse: collapse;

    th {
      padding: 0.5rem;
      text-align: start;
    }

    th:first-child {
      border-radius: 6px 0 0 0;
    }

    th:last-child {
      border-radius: 0 6px 0 0;
    }
  }

  tbody {
    td {
      padding: 0.5rem;
    }
  }
`
