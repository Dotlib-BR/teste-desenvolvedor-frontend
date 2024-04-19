import styled from "styled-components";

export const Body = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
  }

  img {
    width: 20px;
    height: 20px;
    margin-left: 5px;
  }

  form {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 5px;
  }

  input {
    font-size: 15px;
    height: 26px;
  }

  input::placeholder {
    padding-left: 5px;
  }

  .search {
    margin-right: 5px;
  }
`;
