// import "../styles/globals.css";
import type { AppProps } from "next/app";
import { LightModeProvider, ThemeProvider } from "styles/ThemeProvider";
import GlobalStyle from "../styles/globalstyles";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <LightModeProvider>
        <ThemeProvider>
          <GlobalStyle />

          <Component {...pageProps} />
        </ThemeProvider>
      </LightModeProvider>
    </>
  );
}
