import styled from 'styled-components'

export const HomeContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme['background-primary']};

  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const Header = styled.header`
  margin: 2rem auto 0;

  img {
    max-width: 20rem;
  }
`

export const FlexSection = styled.div`
  width: 70%;
  margin: 0 auto;

  form {
    display: flex;
    align-items: center;
    gap: 1rem;

    input {
      flex: 1;
    }
  }
`

export const Content = styled.div`
  width: 70%;
  margin: 0 auto;
`
