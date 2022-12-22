import React from "react";
import { Container, InnerWrapper, Title } from "./styles";
import TechtimonialCard from "components/TechtimonialCard";
import { TechtimonialProps } from "../TechtimonialCard/";

interface Props {
  list: TechtimonialProps[];
}

const TechtimonialsList = (props: Props) => {
  const { list } = props;

  const renderList = list.map((techtimonial) => (
    <TechtimonialCard key={techtimonial.id} {...techtimonial} />
  ));

  return (
    <Container>
      <Title>Techtimonials: </Title>
      <InnerWrapper id="techtimonials">
        {renderList}
        {renderList}
      </InnerWrapper>
    </Container>
  );
};

export default TechtimonialsList;
