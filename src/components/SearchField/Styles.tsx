import styled from 'styled-components'

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
  gap: 15px;

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

  width: 800px;
  height: 200px;
  padding: 10px;
`

export const InputContainer = styled.div<InputContainerProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  gap: 10px;

  width: 400px;

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
    font-size: 14px;
    color: var(--error);
  }

  .bi {
    cursor: pointer;  

    &:hover {
      color: var(--main-color);
    }
  }
`

