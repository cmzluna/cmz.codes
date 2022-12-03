import React from "react";
import {
  Container,
  ImageComponent,
  FigureWrapper,
  Title,
  Description,
} from "./styles";

interface Props {
  id: string;
  name: string;
  description: string;
  url: string;
  technologies: string[];
}

const ProjectCard: React.FC<Props> = ({ id, name, description, url }) => {
  const img = `/projects/${name}.jpg`;

  return (
    <Container>
      <FigureWrapper>
        <ImageComponent src={img} alt={"Logo"} width={100} height={220} />

        <Title>
          <h3>{name}</h3>
        </Title>
      </FigureWrapper>
      <Description>{description}</Description>
      <a href={url}>Visit Website</a>
    </Container>
  );
};

export default ProjectCard;
