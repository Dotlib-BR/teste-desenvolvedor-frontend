import styled from 'styled-components'

type DropDownWrapperProps = {
  $hover: boolean
} 

export const DropDownWrapper = styled.div<DropDownWrapperProps>`
  position: relative;
  display: flex;
  align-items: center;
  
  border: 1px solid var(--secundary-color);
  border-radius: ${({ $hover }) => $hover ? '5px 5px 0 0' : '5px'};
  
  padding: 0 10px;

  cursor: pointer;

  &:hover {
    background-color: var(--secundary-color);
  }
`

export const Options = styled.div`
  position: absolute;
  bottom: -63px;
  left: 0;

  background-color: var(--secundary-color);
  border-radius: 0 0 5px 5px;
  width: 100%;
  
  p {
    padding: 5px 10px;
  }
`