import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  
  gap: 10px;
  padding: 15px;


  background-color: var(--primary-color);
  color: #fff;

  .bi {
    font-size: 20px;
    color: #fff;

    &:hover {
      opacity: 0.8;
    }
  }
`