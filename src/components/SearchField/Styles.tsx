import styled from 'styled-components'
import { breakingPoints } from '../../utils/breakingPoints'

type InputContainerProps = {
  $error: boolean
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const SearchWrapper = styled.div`
  display: flex;
  gap: 20px;

  * {
    border: none;
    outline: none;
  }


  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  transform: translateY(-50%);

  width: min(800px, 90vw);
  min-height: 200px;
  padding: 10px;

  @media (max-width: ${breakingPoints.md}) {
    flex-direction: column-reverse;
    min-height: 250px;
    gap: 10px;
  }
`

export const InputContainer = styled.div<InputContainerProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  gap: 10px;

  width: min(400px, 80%);

  border: 1px solid ${({ $error }) => $error ? 'var(--error)' : 'var(--secundary-color)'};
  border-radius: 5px;
  padding: 5px 10px;

  input[type='text'] {
    outline: none;
    border: none;

    width: 90%;
  }

  span {
    position: absolute;
    bottom: -25px;
    left: 0;
    color: var(--error);
  }

  .bi {
    cursor: pointer;  

    &:hover {
      color: var(--primary-color);
    }
  }
`

