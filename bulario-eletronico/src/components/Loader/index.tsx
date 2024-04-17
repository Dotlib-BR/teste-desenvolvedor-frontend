import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const LoaderContainer = styled.div`
  display: inline-block;
  width: 60px;
  height: 60px;
  position: relative;
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  border-top-color: var(--green-primary);
  animation: ${spin} 1s ease-in-out infinite;
`;

const LoaderCentered = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Loader = () => {
  return <LoaderCentered> <LoaderContainer /> </LoaderCentered> ;
};

export default Loader;
