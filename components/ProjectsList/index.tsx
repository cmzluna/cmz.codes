import React from "react";
import { List, SectionWrapperComponent } from "./styles";
import ProjectCard from "components/ProjectCard";
import { projectsArray } from "./projectsArray";

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
