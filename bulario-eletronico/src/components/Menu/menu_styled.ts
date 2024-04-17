import styled from "styled-components"

export const MenuStyled = styled.nav`
    display: flex;
    align-items: center;
    heigth: 50px;
    margin: 20px;
    justify-content: space-between;

`

export const LogoDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    padding-left: 150px;
    > p {
      font-weight: 600;
      font-size: 25px;
    }

    @media (max-width: 640px) {
      padding-left: 0px;
    }
` 

