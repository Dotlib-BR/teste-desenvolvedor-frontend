import styled from 'styled-components'

export const HomeContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const Header = styled.header`
  margin: 2rem auto 0;

  img {
    max-width: 12rem;
  }
`

export const FlexSection = styled.div`
  width: 70%;
  margin: 0 auto;

  form {
    display: flex;
    align-items: end;
    gap: 1rem;

    input {
      flex: 1;
    }
  }
`

export const Content = styled.div`
  width: 70%;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: end;
`

export const DropDownContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
`

export const OrderHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  transition: all 0.2s ease-in-out;
  cursor: pointer;

  svg {
    &:hover {
      transform: scale(1.2);
    }
  }
`
