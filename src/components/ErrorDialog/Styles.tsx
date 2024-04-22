import styled from 'styled-components'

type Props = {
  $error: boolean
}

export const DialogWrapper = styled.div<Props>`
  position: absolute;
  z-index: 5;

  min-height: 100vh;
  width: 100%;

  display: flex;
  justify-content: center;

  opacity: ${props => props.$error ? 1 : 0};
  pointer-events: ${props => props.$error ? 'auto' : 'none'};
  transition: opacity 0.5s ease-in-out;

  background-color: rgba(0, 0, 0, 0.5);

  overflow-y: hidden;

  .slide-in {
    animation: slide-in 0.5s ease-in-out forwards;
  }

  .slide-out {
    animation: slide-out 0.5s ease-in-out forwards;
  }
  
  
  @keyframes slide-in {
    0% {
      transform: translateY(-500px)
    }

    80% {
      transform: translateY(20px)
    }

    100% {
      transform: translateY(0)
    }
  }

  @keyframes slide-out {
    0% {
      transform: translateY(0)
    }

    20% {
      transform: translateY(20px)
    }

    100% {
      transform: translateY(-500px)
    }
  }
`

export const DialogContainer = styled.div`
  min-width: 300px;
  height: fit-content;

  background-color: var(--primary-color);
  color: #ffffff;
  
  padding: 30px;
  margin-top: 50px;

  border-radius: 10px;
`
