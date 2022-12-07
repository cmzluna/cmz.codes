import React from "react";
import { List } from "./styles";
import ProjectCard from "components/ProjectCard";
import { projectsArray } from "./projectsArray";

const ProjectsList = () => {
  return (
    <List id="portfolio">
      {projectsArray.map((props) => {
        return <ProjectCard key={props.id} {...props} />;
      })}
    </List>
  );
};

export default ProjectsList;
