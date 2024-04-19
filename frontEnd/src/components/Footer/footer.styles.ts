import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

export const Section = styled.section`
  height: 100%;
  width: min-content;
  padding: 5px 10px;

  border-radius: 10px;
  border: solid 2px ${(props) => props.theme.primary};
  color: ${(props) => props.theme.primary};

  font-weight: bold;
  font-size: 18px;
  transition: background-color 0.3s;

  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.secondary};
  }
`;
