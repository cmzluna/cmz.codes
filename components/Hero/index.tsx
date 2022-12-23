import React from "react";
import { Container, Buttons, SocialLinks, InnerWrapper, Text } from "./styles";
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
        <Link href="http://www.lanacion.com.ar">
          <LinkedIn
            className="LinkedIn"
            width={35}
            fill={theme.colors.primary}
          />
        </Link>
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
            Creating fresh & fast web apps <br />
            and sites with passion!
          </p>
        </Text>
      </InnerWrapper>
      <Buttons>
        <Link href="#portfolio">
          <Button>My Work</Button>
        </Link>

        <Link
          href="https://docs.google.com/document/d/1W4ym6tK3ZrtQtgvrFK8lOq-5QJRK9NoWVg6H2lgLwiA/edit?usp=sharing"
          target="_blank"
        >
          <Button>My Resume</Button>
        </Link>
      </Buttons>
      {/* <NavBar />


      <SocialLinks /> */}
    </Container>
  );
};

export default Hero;
