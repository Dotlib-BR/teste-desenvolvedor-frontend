import { styled } from 'styled-components';

export const ShowDataStyles = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  width: '100%',
  margin: '50px auto',

  '.iteractive-item': {
    cursor: 'pointer',
    textDecoration: 'underline',
    color: 'blue',
  },

  '#pagination': {
    display: 'flex',
    justifyContent: 'center',

    height: 40,
  },

  '.pdf': {
    backgroundColor: 'gray',
    border: 'none',
    borderRadius: 2,
    padding: 5,
    color: 'white',

    display: 'flex',
    alignItems: 'center',
    gap: 15,
    cursor: 'pointer',
  },
});
