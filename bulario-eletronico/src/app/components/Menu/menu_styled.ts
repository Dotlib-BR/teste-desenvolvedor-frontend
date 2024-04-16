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
    padding-left: 150px;
    > p {
      font-weight: 600;
      font-size: 25px;
    }
`

export const ListOptions = styled.ul`
    display: flex;
    gap: 40px;
    padding-right: 150px;

`

export const ListOption = styled.li`
    text-decoration: none;
    font-size: 18px;
    font-weight: 500;
    list-style: none;
    cursor: pointer;

    > a {
      text-decoration: none;
      color: black;

      &:hover {
        color: var(--blue-primary);
        border-bottom: 1px solid var(--blue-primary);
      }
    }
`
