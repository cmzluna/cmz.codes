import React, { useContext, useState } from "react";
import {
  DefaultTheme,
  ThemeProvider as SCThemeProvider,
} from "styled-components";

const lightTheme: DefaultTheme = {
  colors: {
    primary: "red",
    background: "#EEE",
    text: "#1a161b",
  },
  headerHeight: "50px",
};

const darkTheme: DefaultTheme = {
  colors: {
    primary: "red",
    text: "#FFFFFF",
    background: "#1a161b",
  },
  headerHeight: "50px",
};

interface LMProps {
  isLightMode: boolean;
  toggleLightMode: () => void;
}

const LightModeContext = React.createContext<LMProps>({
  isLightMode: true,
  toggleLightMode: () => {},
});

const LightModeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isLightMode, setLightMode] = useState(true);
  const toggleLightMode = () => setLightMode((prev) => !prev);
  return (
    <LightModeContext.Provider value={{ isLightMode, toggleLightMode }}>
      {children}
    </LightModeContext.Provider>
  );
};

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { isLightMode } = useToggleLightMode();
  return (
    <SCThemeProvider theme={isLightMode ? lightTheme : darkTheme}>
      {children}
    </SCThemeProvider>
  );
};

const useToggleLightMode = () => useContext(LightModeContext);

export { ThemeProvider, useToggleLightMode, LightModeProvider };
