import React from "react";

import { Container, InnerWrapper, StyledImportedIcon, Title } from "./styles";
// import TechIcons from "components/TechIcons";

interface Props {
  list: string[];
  size: number;
}
const TechIcons = (props: Props) => {
  const { list, size } = props;

  return (
    <Container>
      <Title>Technologies involved: </Title>
      <InnerWrapper id="technologies">
        {list.map((tech) => (
          <StyledImportedIcon key={tech} name={tech} size={size} title={tech} />
        ))}
      </InnerWrapper>
    </Container>
  );
};

export default TechIcons;
