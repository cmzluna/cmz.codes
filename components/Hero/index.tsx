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
import CirclesBackground from "components/Hero/components/CirclesBackground";
import Computer from "./components/Computer";
import Lamp from "components/Hero/components/Lamp";
import LinkedIn from "components/Icons/LinkedIn";
import Email from "components/Icons/Email";
import GitHub from "components/Icons/GitHub";
import Button from "components/Button";

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
        <CirclesBackground />
        <Computer />
        <Lamp isLightOn={!isLightMode} />
        <Text>
          <h2>FrontEnd Developer</h2>
          <p>
            Creating fresh & fast web apps <br />
            and sites with passion!
          </p>
        </Text>
      </InnerWrapper>
      <Buttons>
        <Button>My Work</Button>
        <Button>My Resume</Button>
      </Buttons>
      {/* <NavBar />


      <SocialLinks /> */}
    </Container>
  );
};

export default Hero;
