import React from "react";
import { Container, TitleWrapper, Wrapper, Title } from "./styles";
import CirclesSeparator from "components/CirclesSeparator";

interface Props {
  className?: string;
  title: string;
  id: string;
  children: React.ReactNode;
}
const SectionWrapper: React.FC<Props> = ({
  id,
  title,
  className,
  children,
}) => {
  return (
    <Container id={id}>
      <TitleWrapper>
        <CirclesSeparator />
        <Title>{title}</Title>
      </TitleWrapper>

      <Wrapper className={className}>{children}</Wrapper>
    </Container>
  );
};

export default SectionWrapper;
