import { styled } from 'styled-components'

export const Container = styled.header`
    display: flex;
    height: 200px;
    justify-content: space-evenly;
    color: ${props => props.theme.white};
    background: ${props => props.theme.purple_dark};
    align-items: center;
    border-bottom: 1px solid ${props => props.theme.black};
    width: 100%;

    div{
        display: flex;
        align-items: center;
        gap: 30px;
    }
    p{
        font-size: 40px;
        color: ${props => props.theme.black};
        font-weight: bold;
    }
`

export const ContainerMenu = styled.div`
    span {
        @media (max-width: 1200px) {
            display: none;
        }
    }
    p {
        @media (max-width: 1200px) {
            display: none;
        }
    }
`
export const ContainerInputs = styled.div`
    input{
        width: 250px;
        height: 50px;
        padding: 8px;
        border-radius: 8px;
        border: none;
    }

    button{
        font-weight: bold;
        width: 100px;
        height: 50px;
        background: ${props => props.theme.gray_dark};
        cursor: pointer;
        border: none;
        transition: 0.3s ease;

        &:hover {
            background: ${props => props.theme.gray_light};
        }
    }
    @media (max-width: 1400px) {
        display: flex;
        margin-right: 300px;
        flex-direction: column;
    }
    @media (max-width: 768px) {
       margin-right: 100px;
    }
`