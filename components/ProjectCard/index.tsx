import TechIcons from "components/TechIcons";
import React from "react";
import {
  Container,
  ImageComponent,
  FigureWrapper,
  Title,
  Description,
  IconsWrapper,
} from "./styles";
import { SiHomeadvisor, SiGit } from "react-icons/si";
import Button from "components/Button";

interface Props {
  id: string;
  name: string;
  description: string;
  url: string;
  technologies: string[];
  links: { repo: string; deploy: string };
}

const ProjectCard: React.FC<Props> = ({
  id,
  name,
  description,
  url,
  technologies,
}) => {
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
      <IconsWrapper>
        <TechIcons list={technologies} size={25} />
        <Button>Hola</Button>
        <Button>Chau</Button>
      </IconsWrapper>
    </Container>
  );
};

export default ProjectCard;
