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
import Link from "next/link";

interface Props {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  links: { repo?: string; deploy?: string };
}

const ProjectCard: React.FC<Props> = ({
  id,
  name,
  description,
  technologies,
  links,
}) => {
  const img = `/projects/${name}.jpg`;
  const { repo, deploy } = links;

  return (
    <Container>
      <FigureWrapper>
        <ImageComponent src={img} alt={"Logo"} fill objectFit="contain" />

        <Title>
          <h3>{name}</h3>
        </Title>
      </FigureWrapper>
      <Description>{description}</Description>
      <IconsWrapper>
        <TechIcons list={technologies} size={25} />
      </IconsWrapper>
      <IconsWrapper>
        {repo && (
          <Button>
            <Link href={repo} target="_blank">
              <SiGit />
              Code
            </Link>
          </Button>
        )}
        {deploy && (
          <Button>
            <Link href={deploy}>
              <SiHomeadvisor /> See live
            </Link>
          </Button>
        )}
      </IconsWrapper>
    </Container>
  );
};

export default ProjectCard;
