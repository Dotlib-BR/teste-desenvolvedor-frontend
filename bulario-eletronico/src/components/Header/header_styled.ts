import styled from "styled-components";

// image
import headerImage from '../../assets/images/header_image.png'

export const HeaderStyled = styled.header`
    display: flex;
    align-items: center;
    background-image: url(${headerImage.src});
    background-size: cover; 
    background-position: center;
    background-repeat: no-repeat; 
    width: 100vw;
    height: 500px;
    justify-content: space-between;
`

export const HeaderText = styled.div`
    width: 530px;
    padding-left: 175px;

`

export const HeaderTag = styled.h2`
    background-color: var(--green-primary);
    font-weight: 400;
    font-size: 15px;
    text-transform: uppercase;
    letter-spacing: 6px;
    padding: 2px;
    width: fit-content;
`

export const HeaderTitle = styled.h1`
    color: var(--blue-secondary);
    font-weight: 700;
    font-size: 35px;
`