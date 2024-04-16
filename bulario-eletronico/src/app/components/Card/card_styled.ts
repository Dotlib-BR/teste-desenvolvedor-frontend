import styled from "styled-components";

export const CardStyled = styled.div`
    width: 328px;
    height: 421px;
    background-color: #FFFFFF;
    border: 1px solid var(--gray-secondary);
    padding: 22px;
    margin: 30px;
`

export const MedicineName = styled.h3`
    font-size: 20px;
    font-weight: 700;
    text-align: center;
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
`

export const Label = styled.p`
    font-weight: 700;
`
