import hexToRgba from 'hex-to-rgba'
import styled, { css } from 'styled-components'

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`

type ItemProps = {
  $isCurrentPage: boolean
}

export const Item = styled.button<ItemProps>`
  width: 2rem;
  height: 2rem;
  border: none;
  outline: none;
  border-radius: 6px;
  padding: 0.5rem;
  cursor: pointer;

  transition: all 0.1s ease-in-out;

  ${(props) =>
    props.$isCurrentPage
      ? css`
          background-color: ${(props) => props.theme.primary};
          color: ${(props) => props.theme['text-light']};
        `
      : css`
          background-color: ${(props) => props.theme['background-secondary']};

          &:hover {
            background-color: ${(props) =>
              hexToRgba(props.theme['background-secondary'], 0.8)};
          }
        `}
`
