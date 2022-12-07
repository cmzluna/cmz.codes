import ImportIcon from "utils/importIcon";
import React from "react";

import { Container, InnerWrapper, StyledImportedIcon } from "./styles";
// import TechIcons from "components/TechIcons";

interface Props {
  list: string[];
  size: number;
}
const TechIcons = (props: Props) => {
  const { list, size } = props;

  return (
    <Container>
      <p>technologies: </p>
      <InnerWrapper id="technologies">
        {list.map((tech) => (
          <StyledImportedIcon key={tech} name={tech} size={size} />
        ))}
      </InnerWrapper>
    </Container>
  );
};

export default TechIcons;
