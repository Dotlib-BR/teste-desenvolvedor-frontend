import styled, { css, keyframes } from 'styled-components'

import hexToRGBA from 'hex-to-rgba'

type StyledButtonProps = {
  color: 'primary' | 'error' | 'disabled'
}

export const StyledButton = styled.button<StyledButtonProps>`
  padding: 1rem;
  border-radius: 6px;
  font-weight: bold;
  border: none;
  outline: none;

  display: flex;
  align-items: center;
  gap: 0.5rem;

  cursor: pointer;
  transition: all 0.2s ease-in-out;

  ${(props) =>
    props.color === 'primary' &&
    css`
      background-color: ${props.theme.primary};
      color: ${props.theme['text-light']};

      &:hover {
        background-color: ${(props) => hexToRGBA(props.theme.primary, 0.85)};
      }
    `}

  ${(props) =>
    props.color === 'error' &&
    css`
      background-color: ${props.theme.error};
      color: ${props.theme['text-light']};

      &:hover {
        background-color: ${(props) => hexToRGBA(props.theme.error, 0.85)};
      }
    `}

  ${(props) =>
    props.color === 'disabled' &&
    css`
      background-color: ${props.theme['button-disabled']};
      color: ${props.theme['text-disabled']};
      cursor: not-allowed;

      &:hover {
        background-color: ${(props) =>
          hexToRGBA(props.theme['button-disabled'], 0.85)};
      }
    `}
`

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

export const Spinner = styled.span`
  width: 0.8rem;
  height: 0.8rem;
  border: 2px solid #fff;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: ${rotate} 2s linear infinite;
`
