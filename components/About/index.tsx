import CirclesSeparator from "components/CirclesSeparator";

import React from "react";
import {
  ImageComponent,
  ImageWrapper,
  TextWrapper,
  SectionWrapperComponent,
  CommaComponent,
  BottomCommaComponent,
} from "./styles";

const About = () => {
  return (
    <SectionWrapperComponent title="About me" id="about">
      <TextWrapper>
        <CommaComponent />
        <BottomCommaComponent />
        Hi! I'm Claudio.
        <p>
          I am a front-end React developer based in Buenos Aires, passionate
          about building useful applications from concept to delivery.
        </p>
        <p>
          After being a self taught coder, I have decided to push myself into an
          intensive coding bootcamp where I have learned the MERN stack.
        </p>
        Shortly after graduating from the bootcamp I have joined the engineering
        team at Fizzmod where I have built React-Native apps for their
        e-commerce system. I do programming in various languages and
        technologies, and I like to spend my time pushing myself to learn more
        through open source projects.
        <p>
          Aside from coding, I am passionate about languages, as they open the
          doors to new worlds and cultures. I also love street photography, and
          I take some shots from time to time :)
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
    </SectionWrapperComponent>
  );
};

export default About;
