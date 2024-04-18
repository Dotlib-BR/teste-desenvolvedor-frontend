import styled from 'styled-components'

export const DetailsContainer = styled.div`
  max-width: 86.4rem;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const DetailsContainerError = styled.div`
  max-width: 86.4rem;
  margin: 0 auto;
  padding: 10rem;
  margin-top: -8.8rem;
  gap: 4rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-size: 3rem;

  border: 1px solid ${(props) => props.theme['base-border']};
  border-radius: 0.8rem;

  background: ${(props) => props.theme['base-profile']};
  box-shadow: 0 2px 28px rgba(0, 0, 0, 0.1);
`

export const Button = styled.button`
  padding: 0.8rem 1.6rem;
  font-size: 1.6rem;
  margin-right: 2rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 0.4rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  margin: 0, auto;

  &:hover {
    background-color: #0056b3;
  }
`
