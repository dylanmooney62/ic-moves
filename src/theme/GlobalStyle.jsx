import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }


  body {
    font-family: ${(props) => props.theme.typography.family};
    color: ${(props) => props.theme.palette.neutral[300]};
    line-height: 1.6;
    font-weight: ${(props) => props.theme.typography.weight.base}
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 1;
    font-weight: ${(props) => props.theme.typography.weight.bold}
  }

`;

export default GlobalStyle;
