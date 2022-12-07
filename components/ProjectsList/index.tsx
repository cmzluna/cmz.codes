import React from "react";
import { List } from "./styles";
import ProjectCard from "components/ProjectCard";

const data = [
  {
    id: "1",
    name: "Socially",
    description:
      "Made in the interiors of collapsing stars star stuff harvesting  ",
    url: "http://www.cmz.codes",
    technologies: [
      "Javascript",
      "React",
      "Redux",
      "Javascript",
      "React",
      "Redux",
      "Javascript",
      "React",
      "Redux",
    ],
    links: { repo: "", deploy: "" },
  },
  {
    id: "2",
    name: "Tomatelas",
    description: " illions Drake Equation brain is the seed   of intelligence?",
    url: "http://www.cmz.codes",
    technologies: ["MongoDB", "PostgreSQL", "Redux"],
    links: { repo: "", deploy: "" },
  },
  {
    id: "3",
    name: "UberClone",
    description: "Made in the interiors of collapsing stars star st ",
    url: "http://www.cmz.codes",
    technologies: ["Git", "React", "Javascript"],
    links: { repo: "", deploy: "" },
  },
  {
    id: "4",
    name: "Pelicool",
    description: "Made in the interiors of collaps ",
    url: "http://www.cmz.codes",
    technologies: ["MongoDB", "PostgreSQL", "Redux"],
    links: { repo: "", deploy: "" },
  },
];

const ProjectsList = () => {
  return (
    <List id="portfolio">
      {data.map((props) => {
        return <ProjectCard key={props.id} {...props} />;
      })}
    </List>
  );
};

export default ProjectsList;
