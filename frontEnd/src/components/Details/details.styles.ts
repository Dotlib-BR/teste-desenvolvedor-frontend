import styled from "styled-components";

//Icons
import { X } from "lucide-react";

//Animation
import { motion } from "framer-motion";

//Types
import { ITextProps } from "./details.types";

export const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: auto;

  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 100vh;

  background-color: rgba(0, 0, 0, 0.7);
  box-shadow: 2px 3px 19px rgba(0, 0, 0, 0.1);

  z-index: 1;
`;

export const Content = styled(motion.main)`
  width: 50%;
  height: 50%;
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-color: ${(props) => props.theme.secondary};
  border-radius: 20px;
  border: solid 3px ${(props) => props.theme.primary};
  padding: 20px;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Title = styled.h1`
  color: ${(props) => props.theme.primary};
`

export const ExitIcon = styled(X)`
  color: ${(props) => props.theme.primary}; 
  font-size: 24px;
  cursor: pointer; 
`;

export const Main = styled.main`
  display: flex;
  justify-content: space-around;
`

export const Section = styled.section`
  display: flex;
  gap: 10px;
`

export const Link = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: ${props => props.theme.primary};
  text-decoration: none;
  font-weight: 500;
  
  border-radius: 20px;
  padding: 20px;

  transition: background-color 0.3s;

  &:hover{
    color: ${props => props.theme.secondary};
    background-color: ${props => props.theme.primary};
  }
`

export const Text = styled.p<ITextProps>`
  font-size: 20px;
  font-weight: ${props => (props.value && 'bold')};
  color: ${props => (props.value && props.theme.primary)};
`

export const Footer = styled.footer`
    display: flex;
    flex-direction: column;
`