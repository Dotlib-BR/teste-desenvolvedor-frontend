import styled from 'styled-components'

export const Paginationcontainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;

  span  {
    cursor: pointer;
    font-size: 16px;
  }

  span.selected {
    font-size: 18px;
    font-weight: bold;
  }
`