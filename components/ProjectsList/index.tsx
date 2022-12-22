import React from "react";
import { List } from "./styles";
import ProjectCard from "components/ProjectCard";
import { projectsArray } from "./projectsArray";
import { SectionWrapperComponent } from "components/About/styles";

const ProjectsList = () => {
  return (
    <SectionWrapperComponent title="Projects" id="projects">
      <List id="portfolio">
        {projectsArray.map((props) => {
          return <ProjectCard key={props.id} {...props} />;
        })}
      </List>
    </SectionWrapperComponent>
  );
};

export default ProjectsList;
