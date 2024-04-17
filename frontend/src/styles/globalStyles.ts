import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle({
  '*': {
    boxSizing: 'border-box',
    padding: 0,
    margin: 0,
  },

  'html, body': {
    maxWidth: '100vw',
    height: '100%',
    overflowX: 'hidden',
    fontSize: 16,
  },

  '#__next': {
    width: '100%',
    height: '100%',
  },

  '#root-layout': {
    maxWidth: 1170,
    width: '100%',
    minHeight: '100%',
    height: '100%',
    margin: '0 auto',
  },
});
