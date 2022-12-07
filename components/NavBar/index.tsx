import React from "react";

import { Container, NavBarWrapper, NavLink, ToggleContainer } from "./styles";
import { useToggleLightMode } from "styles/ThemeProvider";
import Link from "next/link";

const NavBar = () => {
  const { isLightMode, toggleLightMode } = useToggleLightMode();

  console.log("isLightMode ==> ", isLightMode);
  return (
    <Container>
      <NavBarWrapper>
        <ToggleContainer isOn={isLightMode} onClick={toggleLightMode} />
        <NavLink href="#about">About</NavLink>
        <NavLink href="#portfolio">Portfolio</NavLink>
        <NavLink href="#resume">Resumé</NavLink>
        <NavLink href="#techtimonials">Techtimonials</NavLink>
      </NavBarWrapper>
    </Container>
  );
};

export default NavBar;
