import React from "react";
import {
  Container,
  Background,
  NavBar,
  Buttons,
  SocialLinks,
  InnerWrapper,
  Text,
  RelativeWrapper,
} from "./styles";
import { useToggleLightMode } from "styles/ThemeProvider";
import HeroSvgComponent from "components/Hero/components/HeroSvgComponent";
import Computer from "./components/Computer";
import LinkedIn from "components/Icons/LinkedIn";
import Email from "components/Icons/Email";
import GitHub from "components/Icons/GitHub";
const Hero = () => {
  const { isLightMode, toggleLightMode } = useToggleLightMode();

  return (
    <Container>
      <SocialLinks>
        <LinkedIn className="LinkedIn" />
        <Email className="Email" />
        <GitHub className="GitHub" />
      </SocialLinks>
      <InnerWrapper>
        <HeroSvgComponent />
        <Computer />

        <Text>
          <h2>FrontEnd Developer</h2>
          <p>
            Creating fresh & fast web apps <br />
            and sites with passion!
          </p>
        </Text>
      </InnerWrapper>
      <Buttons>Buttons</Buttons>
      {/* <NavBar />


      <SocialLinks /> */}
    </Container>
  );
};

export default Hero;
