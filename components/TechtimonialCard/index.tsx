import TechIcons from "components/TechIcons";
import React from "react";
import {
  Container,
  Title,
  Text,
  Author,
  Position,
  Separator,
  Comma,
} from "./styles";

export interface TechtimonialProps {
  id: string;
  author: { name: string; position: string };
  text: string;
}

const TechtimonialCard: React.FC<TechtimonialProps> = ({
  id,
  author,
  text,
}) => {
  const { name, position } = author;

  return (
    <Container>
      <Comma>“</Comma>
      <Text>{text}</Text>
      <Title>
        <Separator />
        <Author>{name}</Author>
        <Position>{position}</Position>
      </Title>
    </Container>
  );
};

export default TechtimonialCard;
