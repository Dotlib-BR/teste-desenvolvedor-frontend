import styled from 'styled-components'

type InputContainerProps = {
  $error: boolean
}

export const SearchWrapper = styled.div`
  display: flex;
  gap: 5px;
`

export const InputContainer = styled.div<InputContainerProps>`
  display: flex;
  justify-content: space-between;
  position: relative;

  width: 400px;
  border: 1px solid ${({ $error }) => $error ? 'var(--error)' : 'var(--primary-color)'};
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

  .bi-search {
    cursor: pointer;  
  }
`

