import styled from "styled-components";

export const Body = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px); 
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;

  p{
    font-weight: 800;
    margin-top: -10px;
  }
`;

export const PopupContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
  background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(153,185,51,1) 100%);
`;

export const Buttons = styled.div`
  margin-top: 20px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  margin: 0 10px;
  background-color: Gainsboro;
  color: black;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 400;
  border: 1px solid #787878;

  &:hover {
    background-color: #787878;
  }
`;

export const CloseIcon = styled.img`
  position: relative;
  top: -15px;
  right: -112px;
  width: 20px;
  height: 20px;
  cursor: pointer;
  &:hover {
    background-color: #787878;
  }
`;