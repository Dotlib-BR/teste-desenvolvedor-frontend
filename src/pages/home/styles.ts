import styled, { keyframes } from "styled-components";

const blinkAnimation = keyframes`
  0%, 100% { opacity: 1; visibility: visible; }
  50% { opacity: 0; visibility: hidden; }
`;

export const Container = styled.div`
    background: ${props => props.theme.body};
    height: 100vh;

    main{
        display: grid;
        gap: 30px;
        grid-template-columns: repeat(5, 1fr);
        place-items: center
    }
    footer{
        display: flex;
        margin-top: 15px;
        gap: 5px;
        justify-content: end;
        padding-right: 60px;
    }
    main{
        @media (max-width: 1400px) {
            grid-template-columns: repeat(4, 1fr);
            place-items: center
        }
        @media (max-width: 1200px) {
            grid-template-columns: repeat(3, 1fr);
            place-items: center
        }
        @media (max-width: 992px) {
            grid-template-columns: repeat(2, 1fr);
            place-items: center
        }
        @media (max-width: 576px) {
            grid-template-columns: repeat(1, 1fr);
            place-items: center
        }
    }
`
export const BlinkingH6 = styled.h6`
  margin-top: 30px;
  padding-bottom: 20px;
  text-align: center;
  font-size: 20px;

  animation: ${blinkAnimation} 2s infinite;
`;

export const MedicineContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: ${props => props.theme.white};
    height: 300px;
    width: 280px;
    padding: 20px;
    border-radius: 8px;

    div{
        display: flex;
        justify-content: space-between;
    }
    
    h1{
        display: flex;
        background: ${props => props.theme.purple_light};
        color: ${props => props.theme.white};
        border-top-right-radius: 20px;
        border-bottom-left-radius: 20px;
        font-size: 20px;
        height: 50px;
        width: 240px;
        align-items: center;
        justify-content: center;
    }
    p{
        display: flex;
        justify-content: space-between;
        font-size: 18px;

    }
    button{
        font-weight: bold;
        width: 130px;
        height: 50px;
        background: ${props => props.theme.gray_dark};
        cursor: pointer;
        border: none;
        transition: 0.3s ease;
        border-radius: 10px;
        &:hover {
            background: ${props => props.theme.gray_light};
        }
    }
`;

export const ButtonFooter = styled.button`
    background: ${props => props.theme.white};
    cursor: pointer;
    border: none;
    transition: 0.3s ease;
    &:hover {
        background: ${props => props.theme.gray_light};
    }
`;

export const ErrorMessage = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    color: red;
    font-size: 20px;
    margin-top: 50px;
`;
