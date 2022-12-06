import { createGlobalStyle } from "styled-components";
import { Anton, Source_Sans_Pro } from "@next/font/google";
// @import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;400;500&display=swap");

// how to add font
// https://nextjs.org/docs/basic-features/font-optimization

const inter = Source_Sans_Pro({ weight: "400", subsets: ["latin"] });

const GlobalStyle = createGlobalStyle`
  html {
    font-family: ${inter.style.fontFamily};
    font-size: 17px;
  }
  body {
    color: ${({ theme }) => theme.colors.text};
    padding: 0;
  margin: 10px 30px;
  scroll-behavior: smooth;
  font-family: ${inter.style.fontFamily};
  background-color: ${({ theme }) => theme.colors.background}; 
  }
  a {

    text-decoration: none;
  }
  * {
    box-sizing: border-box;
  }
 
`;

export default GlobalStyle;
