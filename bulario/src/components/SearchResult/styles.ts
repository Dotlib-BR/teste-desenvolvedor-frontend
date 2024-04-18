import styled from 'styled-components'

export const SearchResultContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-self: center;

  width: 86.4rem;
  margin-top: 3.6rem;
`

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h3 {
    font-size: 1.8rem;
    color: ${(props) => props.theme['base-subtitle']};
  }

  span {
    font-size: 1.4rem;
  }
`
