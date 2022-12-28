import React from "react";
import {
  Container,
  InnerWrapper,
  Text,
  WorkResumeBtns,
  MobileComponent,
  SelectorCardComponent,
  CheckCardComponent,
  SocialLinksTop,
} from "./styles";
import { useToggleLightMode } from "styles/ThemeProvider";
import CirclesBackground from "components/Hero/components/CirclesBackground";
import Computer from "./components/Computer";
import Lamp from "components/Hero/components/Lamp";

const Hero = () => {
  const { isLightMode } = useToggleLightMode();

  return (
    <Container>
      <SocialLinksTop />

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
    </Container>
  );
};

export default Hero;
