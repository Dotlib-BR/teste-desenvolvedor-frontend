import hexToRgba from 'hex-to-rgba'
import styled from 'styled-components'

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 0.85rem;
  position: relative;

  thead {
    th {
      background-color: ${(props) => props.theme['background-secondary']};
      padding: 0.75rem;
      text-align: left;
      color: ${(props) => props.theme['gray-100']};
      font-size: 0.75rem;
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
    height: 10rem;
    overflow: auto;

    tr {
      transition: all 0.1s ease-in-out;

      &:hover {
        background-color: ${(props) =>
          hexToRgba(props.theme['button-disabled'], 0.4)};
      }
    }

    td {
      width: fit-content;
      max-width: 10rem;
      background-color: ${(props) =>
        hexToRgba(props.theme['background-secondary'], 0.2)};
      padding: 0.65rem;
      font-size: 0.75rem;
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
