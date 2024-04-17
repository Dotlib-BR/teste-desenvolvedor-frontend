import styled from "styled-components";

export const CardStyled = styled.div`
    width: 328px;
    height: 400px;
    background-color: #FFFFFF;
    border: 1px solid var(--gray-secondary);
    padding: 22px;
    margin: 30px;
    overflow-x: hidden;
    overflow-y: auto;
    box-shadow: 13px 11px 18px -15px rgba(0,0,0,0.34);
    &::-webkit-scrollbar {
        width: 5px; 
    }

    &::-webkit-scrollbar-thumb {
        background-color: var(--blue-primary);
    }

    
`

export const MedicineName = styled.h3`
    font-size: 20px;
    font-weight: 700;
    text-align: center;
    color: var(--blue-primary);
    word-wrap: break-word;
`

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-around;
`

export const MedicineInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`

export const FlexDiv = styled.div`
    display: flex;
    flex-direction: column;

    > a {
        cursor: pointer;
        &:hover {
            border-bottom: 1px solid black;
        }
    }
`

export const Label = styled.p`
    font-weight: 700;
    margin-bottom: 3px;
`
