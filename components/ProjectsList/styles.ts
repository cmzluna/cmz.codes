import { lighten } from "polished";
import styled, { css } from "styled-components";
import Image from "next/image";
import SectionWrapper from "components/SectionWrapper";

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 1.5rem;
`;

const SectionWrapperComponent = styled(SectionWrapper)`
  background-image: url("/circle_background.svg");
  background-size: cover;
  background-repeat: no-repeat;
  background-origin: border-box;
  display: flex;
  margin: 0 auto;
  position: relative;
  align-items: center;
  justify-items: center;
  flex-wrap: wrap;
  padding: 1rem;
  overflow: hidden;
`;

export { List, SectionWrapperComponent };
