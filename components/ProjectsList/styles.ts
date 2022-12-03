import { lighten } from "polished";
import styled, { css } from "styled-components";
import Image from "next/image";

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 1.5rem;
`;

export { List };
