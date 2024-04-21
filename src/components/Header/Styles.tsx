import styled from 'styled-components'

import bg from '../../img/bg-hearder.png'

export const HeaderConatiner = styled.header`
  padding: 50px;
  width: 100%;
  color: white;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  h1 {
    margin-bottom: 100px;
  }
`