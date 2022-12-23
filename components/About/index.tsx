import CircleBackground from "components/CircleBackground";
import CirclesSeparator from "components/CirclesSeparator";

import React from "react";
import { useTheme } from "styled-components";
import { useToggleLightMode } from "styles/ThemeProvider";
import {
  ImageComponent,
  ImageWrapper,
  TextWrapper,
  SectionWrapperComponent,
  CommaComponent,
  BottomCommaComponent,
  InnerWrapper,
} from "./styles";

const About = () => {
  const theme = useTheme();

  return (
    <SectionWrapperComponent title="About" id="about">
      <InnerWrapper>
        <TextWrapper>
          <CommaComponent
            fill={theme.colors.secondary}
            stroke={theme.colors.primary}
          />
          <BottomCommaComponent
            fill={theme.colors.secondary}
            stroke={theme.colors.primary}
          />
          Hi! I'm Claudio.
          <p>
            I am a front-end React developer based in Buenos Aires, passionate
            about building useful applications from concept to delivery.
          </p>
          <p>
            After being a self taught coder, I have decided to push myself into
            an intensive coding bootcamp where I have learned the MERN stack.
          </p>
          Shortly after graduating from the bootcamp I have joined en ecommerce
          company where I have built React-Native apps. I do programming in
          various languages and technologies, and I like to spend my time
          pushing myself to learn more through open source projects.
          <p>
            Aside from coding, I am passionate about languages, as they open the
            doors to new worlds and cultures.
          </p>
        </TextWrapper>
        <ImageWrapper>
          <ImageComponent
            src={"/claudio_photo.jpg"}
            alt={"Logo"}
            fill
            objectFit="cover"
          />
        </ImageWrapper>
      </InnerWrapper>
    </SectionWrapperComponent>
  );
};

export default About;
