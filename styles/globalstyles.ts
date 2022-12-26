import { createGlobalStyle } from "styled-components";
import { Source_Sans_Pro } from "@next/font/google";

const inter = Source_Sans_Pro({ weight: "600", subsets: ["latin"] });

const GlobalStyle = createGlobalStyle`
  html {
    font-family: ${inter.style.fontFamily};
    tab-size: 4;
    font-size: 18px;
    border:7px dotted green;
   
  }
  body {
    color: ${({ theme }) => theme.colors.text};

  scroll-behavior: smooth;
  font-family: ${inter.style.fontFamily};
  background-color: ${({ theme }) => theme.colors.background.primary}; 
  background-image: url("/bubbles.svg");
  background-size: contain;
  background-repeat:repeat;
  background-origin: border-box;
  background-attachment: local;
 
 
 
  
  }
  a {

    text-decoration: none;
  }
  * {
    box-sizing: border-box;
  }
 
 
`;

export default GlobalStyle;
