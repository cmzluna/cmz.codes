import React from "react";
import { Container, NavBarWrapper, NavLink, ToggleContainer } from "./styles";
import { useToggleLightMode } from "styles/ThemeProvider";

const NavBar = () => {
  const { isLightMode, toggleLightMode } = useToggleLightMode();

  return (
    <Container>
      <NavBarWrapper>
        <ToggleContainer isOn={isLightMode} onClick={toggleLightMode} />
        <NavLink href="#about">About</NavLink>
        <NavLink href="#portfolio">Portfolio</NavLink>
        <NavLink
          href={encodeURI("Curriculum Vitae Claudio Mazzoli.pdf")}
          target="_blank"
        >
          Resume
        </NavLink>
        <NavLink href="#techtimonials">Techtimonials</NavLink>
      </NavBarWrapper>
    </Container>
  );
};

export default NavBar;
