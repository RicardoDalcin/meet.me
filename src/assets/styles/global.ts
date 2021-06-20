import { lighten } from 'polished';
import { createGlobalStyle } from 'styled-components';
import colors from './colors';

export const global = createGlobalStyle`
  :root {
    font-size: 60% !important;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root, .App, #__next {
    height: 100%;
    width: 100%;
  }

  #__next > div {
    height: 100%;
  }

  body {
    background: linear-gradient(110deg, ${colors.primary} 2.5%, ${colors.gradient} 100%);
    background-repeat: no-repeat;
    background-attachment: fixed;

    overflow-y: auto;
  }

  html {
    min-height: -webkit-fill-available;
  }

  body,
  input,
  button,
  textarea {
    font-weight: 400;
    font-size: 1.6rem;
    font-family: 'Roboto', sans-serif;
    color: ${colors.black}
  }

  button:hover {
    cursor: pointer;
  }

  button:active, button:focus {
    outline: 0;
  }

  @media (min-width: 700px) {
  :root {
    font-size: 62.5%;
  }

}
`;
