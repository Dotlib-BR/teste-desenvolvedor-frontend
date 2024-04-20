import styled from "styled-components";

export const Body = styled.div`
  border: 5px double black;
  padding: 8px;
  background-color: Gainsboro;
  margin-bottom: 8px;
  width: 500px;
  position: relative;

  .activePrinciples {
    line-height: 18px;
  }

  div {
    padding: 3px;
  }

  .description {
    font-weight: 800;
    font-size: 20px;
  }

  button {
    display: flex;
    flex-direction: center;
    align-items: center;
    position: absolute;
    bottom: 0;
    right: 0;
    margin: 10px;
    font-size: 12px;
    cursor: pointer;
    &:hover {
      background-color: #aaaaaa;
    }

    img {
      width: 20px;
      height: 20px;
      margin-left: 2px;
    }
  }
`;
