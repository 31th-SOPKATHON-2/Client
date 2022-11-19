import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset};
  
  html,
  body {
    width: 100%;
    height: 100%;
  }

  #root {
    display: flex;
    flex-direction: column;
    max-width: 37.5rem;
    min-height: 100vh;
    margin: 0 auto;
    position: relative;
  }

  html {
    font-size: 62.5%;
  }
  
  * {
    box-sizing: border-box;
  }

  body, button, input {
    font-family: 'Spoqa Han Sans Neo', 'sans-serif';
  }
  
  button {
    cursor: pointer;
    border: none;
    outline: none;
    padding: 0;
  }
  
  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;
