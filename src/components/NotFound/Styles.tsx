import styled from "styled-components"

export const Container = styled.div`
  transform: translateY(-25%);

  display: flex;
  flex-grow: 1;
  flex-direction: column; 
  justify-content: center;
  align-items: center;
  gap: 20px;

  & > div {
    display: flex;
    align-items: center;
    gap: 15px;
  } 

  & img {
    width: 50px;
    height: 50px;
  }

  & h3 {
    color: var(--main-color)
  }
`