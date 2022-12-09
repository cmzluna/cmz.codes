import React from "react";
import { Container, InnerWrapper, Title } from "./styles";
import TechtimonialCard from "components/TechtimonialCard";
import { TechtimonialProps } from "../TechtimonialCard/";

interface Props {
  list: TechtimonialProps[];
}

const TechtimonialsList = (props: Props) => {
  const { list } = props;

  return (
    <Container>
      <Title>Techtimonials: </Title>
      <InnerWrapper id="techtimonials">
        {list.map((techtimonial) => (
          <TechtimonialCard key={techtimonial.id} {...techtimonial} />
        ))}
      </InnerWrapper>
    </Container>
  );
};

export default TechtimonialsList;
