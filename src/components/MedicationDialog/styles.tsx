import styled from 'styled-components'
import { breakingPoints } from '../../utils/breakingPoints'

type Props = {
  $display: boolean
}

export const DetailsWrapper = styled.div<Props>`
  opacity: ${props => props.$display ? 1 : 0};
  pointer-events: ${props => props.$display ? 'auto' : 'none'};
  transition: opacity 0.5s ease-in-out;

  height: max(100% , 100vh);
  width: 100%;

  position: absolute;
  z-index: 5;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.5);

  overflow-y: hidden;
`

export const DetailsContainer = styled.div`
  position: relative;

  width: min(800px, 90%);
  min-height: 500px;

  padding: 50px;

  background-color: #fff;

  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 50px;

  @media (max-width: ${breakingPoints.sm}) {
    padding: 50px 20px;
  }
`

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const DescriptionRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 15px; 
` 

export const CloseIcon = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;

  width: 50px;
  height: 50px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50px;
  cursor: pointer;

  &:hover {
    background-color: var(--primary-color-hover);
  }

  .bi-x-lg {
    font-size: 20px;
  }

  @media (max-width: ${breakingPoints.sm}) {

    width: 30px;
    height: 30px;

    .bi-x-lg {
      font-size: 15px;
    }
  }
`