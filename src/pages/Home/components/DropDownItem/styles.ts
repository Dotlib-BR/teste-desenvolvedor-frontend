import hexToRgba from 'hex-to-rgba'
import styled, { css } from 'styled-components'

type DropDownProps = {
  open: boolean
}

export const DropDown = styled.div<DropDownProps>`
  ${(props) =>
    props.open
      ? css`
          margin-top: 0.3rem;
          width: 12rem;
          position: absolute;
          background-color: ${props.theme['background-primary']};
          border-radius: 6px;
          padding: 1rem;
          box-shadow: 5px 5px 24px
            ${hexToRgba(props.theme['text-primary'], 0.3)};
        `
      : css`
          display: none;
        `}
`
