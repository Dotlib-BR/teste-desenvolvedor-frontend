import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 86.4rem;
  padding: 2rem;
  border: 1px solid ${(props) => props.theme['base-border']};
  border-radius: 8px;

  background: ${(props) => props.theme['base-profile']};
  box-shadow: 0 2px 28px rgba(0, 0, 0, 0.1);

  margin-top: -8.8rem;
  align-self: center;
`;

export const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const InputLabel = styled.label`
  font-size: 16px;
  margin-bottom: 8px;
`;

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
`;

export const Button = styled.button`
  padding: 8px 16px;
  font-size: 16px;
  margin-right: 2rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;