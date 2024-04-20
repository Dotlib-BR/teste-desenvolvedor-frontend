import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 330px;
    height: 100px;
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  margin-top: 30px;
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;

  span {
    margin: 0 10px 0 10px;
    font-size: 25px;
  }

  button {
    font-size: 20px;
    cursor: pointer;
    &:hover {
      background-color: #aaaaaa;
    }
  }
`;
