import React from "react";
import { InnerWrapper, SectionWrapperComponent } from "./styles";
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
    <SectionWrapperComponent title="Techtimonials" id="techtimonials">
      <InnerWrapper id="techtimonials">
        {renderList}
        {renderList}
      </InnerWrapper>
    </SectionWrapperComponent>
  );
};

export default TechtimonialsList;
