import React from "react";
import Image from "next/image";
import Logo from "../../public/vercel.svg";
import { Container, ToggleContainer } from "./styles";
import { useToggleLightMode } from "styles/ThemeProvider";

const NavBar = () => {
  const { isLightMode, toggleLightMode } = useToggleLightMode();

  return (
    <Container>
      <button type="button">
        <Image src={Logo} alt={"Logo"} />
      </button>

      <ToggleContainer isOn={isLightMode} onClick={toggleLightMode} />
    </Container>
  );
};

export default NavBar;
