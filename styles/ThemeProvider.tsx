import React, { useContext, useState } from "react";
import {
  DefaultTheme,
  ThemeProvider as SCThemeProvider,
} from "styled-components";

const lightTheme: DefaultTheme = {
  colors: {
    primary: "#b595bc",
    links: "#1a161b",
    background: { primary: "#f1e5f6", secondary: "#d6cbdb" },
    text: "#1a161b",
  },
  icons: {
    primary: "#7c7c7c",
    secondary: "",
  },
  headerHeight: "50px",
};

const darkTheme: DefaultTheme = {
  colors: {
    primary: "#806088",
    links: "#EEE",
    text: "#d1d1d1",
    background: { primary: "#2e2830", secondary: "#473d4a" },
  },
  icons: {
    primary: "#a3a3a3",
    secondary: "",
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
