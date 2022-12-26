import React from "react";
import {
  Container,
  SocialLinks,
  InnerWrapper,
  Text,
  WorkResumeBtns,
} from "./styles";
import { useToggleLightMode } from "styles/ThemeProvider";
import CirclesBackground from "components/Hero/components/CirclesBackground";
import Computer from "./components/Computer";
import Lamp from "components/Hero/components/Lamp";
import LinkedIn from "components/Icons/LinkedIn";
import Email from "components/Icons/Email";
import GitHub from "components/Icons/GitHub";
import Button from "components/Button";
import { useTheme } from "styled-components";
import Link from "next/link";

const Hero = () => {
  const { isLightMode, toggleLightMode } = useToggleLightMode();
  const theme = useTheme();

  return (
    <Container>
      <SocialLinks>
        <LinkedIn
          className="LinkedIn"
          width={35}
          fill={theme.colors.primary}
          href="https://www.lanacion.com.ar"
        />
        <Email className="Email" width={35} fill={theme.colors.primary} />
        <GitHub className="GitHub" width={35} fill={theme.colors.primary} />
      </SocialLinks>

      <InnerWrapper>
        <CirclesBackground />
        <Computer />
        <Lamp isLightOn={!isLightMode} />
        <Text>
          <h2>FrontEnd Developer</h2>
          <p>
            Passionate about creating cool apps <br />
            and sites !
          </p>
        </Text>
      </InnerWrapper>

      <WorkResumeBtns />
      {/* <NavBar />


      <SocialLinks /> */}
    </Container>
  );
};

export default Hero;
