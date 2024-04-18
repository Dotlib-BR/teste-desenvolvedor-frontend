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
