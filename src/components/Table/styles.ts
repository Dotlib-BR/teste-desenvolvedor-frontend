import hexToRgba from 'hex-to-rgba'
import styled from 'styled-components'

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 0.85rem;

  thead {
    width: 100%;

    th {
      background-color: ${(props) => props.theme['background-secondary']};
      padding: 0.75rem;
      text-align: left;
      color: ${(props) => props.theme['gray-100']};
      font-size: 0.875rem;
      line-height: 1.6;

      &:first-child {
        border-top-left-radius: 6px;
        padding-left: 1.5rem;
      }

      &:last-child {
        border-top-right-radius: 6px;
        padding-right: 1.5rem;
      }
    }
  }

  tbody {
    width: 100%;
    height: 10rem;
    overflow: auto;

    td {
      background-color: ${(props) =>
        hexToRgba(props.theme['background-secondary'], 0.2)};
      padding: 0.75rem;
      font-size: 0.875rem;
      line-height: 1.6;

      &:first-child {
        padding-left: 1.5rem;
      }

      &:last-child {
        padding-right: 1.5rem;
      }
    }
  }
`
