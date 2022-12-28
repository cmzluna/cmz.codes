"use client";
import styled from "styled-components";

interface Props {
  background: string;
}

const Container = styled.div<Props>`
  background: ${(props: Props) => props.background};
`;

export default Container;
