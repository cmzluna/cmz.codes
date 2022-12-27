import React from "react";
import {
  Container,
  SocialLinks,
  InnerWrapper,
  Text,
  WorkResumeBtns,
  MobileComponent,
  SelectorCardComponent,
  CheckCardComponent,
} from "./styles";
import { useToggleLightMode } from "styles/ThemeProvider";
import CirclesBackground from "components/Hero/components/CirclesBackground";
import Computer from "./components/Computer";
import Lamp from "components/Hero/components/Lamp";
import LinkedIn from "components/Icons/LinkedIn";
import Email from "components/Icons/Email";
import GitHub from "components/Icons/GitHub";
import { useTheme } from "styled-components";

const Hero = () => {
  const { isLightMode, toggleLightMode } = useToggleLightMode();
  const theme = useTheme();

  return (
    <Container>
      <SocialLinks>
        <LinkedIn className="LinkedIn" width={35} fill={theme.colors.primary} />
        <Email className="Email" width={35} fill={theme.colors.primary} />
        <GitHub className="GitHub" width={35} fill={theme.colors.primary} />
      </SocialLinks>

      <InnerWrapper>
        <CirclesBackground />
        <MobileComponent />
        <SelectorCardComponent />
        <CheckCardComponent />
        <Computer />

        <Lamp isLightOn={!isLightMode} />
        <Text>
          <h2>FrontEnd Developer</h2>
          <p>
            Passionate about creating
            <br /> cool apps and sites !
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
