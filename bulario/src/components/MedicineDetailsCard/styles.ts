import styled from 'styled-components'

export const MedicineDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 86.4rem;
  padding: 2rem;
  border: 1px solid ${(props) => props.theme['base-border']};
  border-radius: 0.8rem;

  background: ${(props) => props.theme['base-profile']};
  box-shadow: 0 2px 28px rgba(0, 0, 0, 0.1);

  margin-top: -8.8rem;
`

export const Title = styled.h2`
  font-size: 1.6rem;
  margin-bottom: 2rem;
`

export const InputsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2.4rem;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  width: 100%;
`

export const InputLabel = styled.label`
  font-size: 1.6rem;
  margin-bottom: 0.8rem;
`

export const Input = styled.input`
  outline: 1px solid ${(props) => props.theme['base-border']};
  border: none;
  border-radius: 0.6rem;

  padding: 1.4rem 1.6rem;

  color: ${(props) => props.theme['base-text']};
  background: ${(props) => props.theme['base-input']};

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  padding-bottom: 3rem;
  padding-top: 1.2rem;
  gap: 2rem;
`

export const DownloadButton = styled.button`
  width: 26rem;
  padding: 1.6rem;
  font-size: 1.6rem;
  background-color: ${(props) => props.theme.blue};
  color: #fff;
  border: none;
  border-radius: 0.4rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`

export const Button = styled.button`
  padding: 0.8rem 1.6rem;
  font-size: 1.6rem;
  margin-right: 2rem;
  background-color: ${(props) => props.theme.blue};
  color: #fff;
  border: none;
  border-radius: 0.4rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`

export const ExpedientContainer = styled.div`
  display: flex;
  padding-top: 1.2rem;
  gap: 20rem;
`