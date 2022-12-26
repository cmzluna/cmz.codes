import React, { useContext, useState } from "react";
import {
  DefaultTheme,
  ThemeProvider as SCThemeProvider,
} from "styled-components";

const lightTheme: DefaultTheme = {
  colors: {
    primary: "#886591",
    secondary: "#efd5f7",
    links: "#6a4c71",
    background: { primary: "#fff", secondary: "#d3d0f2", hover: "#b3b1ce" },
    text: "#1a161b",
  },
  icons: {
    primary: "#886591",
    secondary: "",
  },
  headerHeight: "50px",
};

const darkTheme: DefaultTheme = {
  colors: {
    primary: "#c69ed1",
    secondary: "#dfc8e6",
    links: "#efd5f7",
    text: "#d1d1d1",
    background: { primary: "#2e2830", secondary: "#473d4a", hover: "#87778d" },
  },
  icons: {
    primary: "#ad83b8",
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
