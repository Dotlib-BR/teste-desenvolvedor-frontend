import styled from 'styled-components'

type Props = {
  $error: boolean
}

export const DialogWrapper = styled.div<Props>`

  opacity: ${props => props.$error ? 1 : 0};
  pointer-events: ${props => props.$error ? 'auto' : 'none'};
  transition: opacity 0.5s ease-in-out;

  min-height: 100vh;
  width: 100%;

  position: absolute;
  z-index: 5;

  display: flex;
  justify-content: center;

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
  background-color: var(--main-color);
  color: #ffffff;
  
  min-width: 300px;
  height: fit-content;
  padding: 30px;
  margin-top: 50px;

  border-radius: 10px;
`
