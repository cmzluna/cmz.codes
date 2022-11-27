import { createGlobalStyle } from "styled-components";
// @import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;400;500&display=swap");

const GlobalStyle = createGlobalStyle`
  html,
  body {
    color: ${({ theme }) => theme.colors.primary};
    padding: 0;
  margin: 0;
  scroll-behavior: smooth;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
