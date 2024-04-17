import styled from 'styled-components';

export const DocumentModalStyles = styled.div({
  width: '100vw',
  height: '100vh',
  top: 0,
  left: 0,
  zIndex: 10,

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  position: 'absolute',

  backgroundColor: '#49494959',

  '#document-modal-content': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

    width: 600,
    maxWidth: '90%',

    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',

    boxShadow:
      'rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em',
    borderRadius: 8,
    backgroundColor: 'white',

    h3: {
      height: 50,
      marginTop: 25,
    },

    '#close-document-modal-button': {
      alignSelf: 'flex-end',
      top: 0,
      margin: 5,
      border: 'none',
      backgroundColor: 'transparent',
      cursor: 'pointer',
      position: 'absolute',
    },
  },
});
