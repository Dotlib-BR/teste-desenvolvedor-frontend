import styled from 'styled-components'

export const InputContent = styled.label`
  width: 100%;

  display: flex;
  flex-direction: column;
`

export const FlexArea = styled.div`
  margin-bottom: 0.15rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ErrorMessage = styled.small`
  color: ${(props) => props.theme.error};
`

export const StyledInput = styled.input`
  padding: 0.875rem;
  border-radius: 6px;
  border: 2px solid transparent;
  outline: none;

  background-color: ${(props) => props.theme['background-secondary']};

  &:focus {
    border: 2px solid ${(props) => props.theme.primary};
    outline: none;
  }
`
