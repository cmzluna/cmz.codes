import React, { useContext, useState } from "react";
import {
  DefaultTheme,
  ThemeProvider as SCThemeProvider,
} from "styled-components";

const lightTheme: DefaultTheme = {
  colors: {
    primary: "#886591",
    secondary: "#f2e5f5",
    links: "#1a161b",
    background: { primary: "#fff", secondary: "#f4f4f4", hover: "" },
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
    primary: "#9f78a9",
    secondary: "#2f2b30",
    links: "#EEE",
    text: "#d1d1d1",
    background: { primary: "#2e2830", secondary: "#473d4a", hover: "#65586a" },
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
