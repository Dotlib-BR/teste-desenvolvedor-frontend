import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const Section = styled.section`
  width: 100%;
  display: flex;

  justify-content: space-between;
`;

export const Title = styled.h1`
  width: 100%;
  padding: 10px 0px;

  color: ${(props) => props.theme.secondary};
  background-color: ${(props) => props.theme.primary};

  border-radius: 10px;
  text-align: center;
`;
