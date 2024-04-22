import styled from 'styled-components'

import { breakingPoints } from '../../utils/breakingPoints'

type DropDownWrapperProps = {
  $hover: boolean
} 

export const DropDownWrapper = styled.div<DropDownWrapperProps>`
  position: relative;
  display: flex;
  align-items: center;

  padding: 0 10px;
  height: 35px;
  
  border: ${({ $hover }) => $hover ? 'none' : '1px solid var(--secundary-color-hover)'};
  border-radius: ${({ $hover }) => $hover ? '5px 5px 0 0' : '5px'};
  
  cursor: pointer;

  &:hover {
    background-color: var(--secundary-color-hover);
  }
`

export const Options = styled.div`
  position: absolute;
  bottom: -63px;
  left: 0;
  right: 0;

  background-color: var(--secundary-color-hover);
  border-radius: 0 0 5px 5px;
  
  p {
    padding: 5px 10px;
  }

  @media (max-width: ${breakingPoints.sm}) {
    bottom: -55px;
  }
`