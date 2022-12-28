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
          href="https://docs.google.com/document/d/1W4ym6tK3ZrtQtgvrFK8lOq-5QJRK9NoWVg6H2lgLwiA/edit?usp=sharing"
          target="_blank"
        >
          Resumé
        </NavLink>
        <NavLink href="#techtimonials">Techtimonials</NavLink>
      </NavBarWrapper>
    </Container>
  );
};

export default NavBar;
