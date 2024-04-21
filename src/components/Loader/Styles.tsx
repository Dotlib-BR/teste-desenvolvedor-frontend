import styled from "styled-components"

type Props = {
  $display: boolean
}

export const LoaderContainer = styled.div<Props>`
  opacity: ${props => props.$display ? 1 : 0};
  pointer-events: ${props => props.$display ? 'auto' : 'none'};
  transition: opacity 0.5s ease-in-out;

  min-height: 100vh;
  width: 100%;

  position: absolute;
  z-index: 5;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.5);

  overflow-y: hidden;
`