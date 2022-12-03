import { lighten } from "polished";
import styled, { css } from "styled-components";
import Image from "next/image";

const Wrapper = styled.div`
  position: absolute;
  width: 65%;
  bottom: 8%;
  right: 5%;

  @media (max-width: 870px) {
    bottom: 5%;
    right: 4%;
    width: 55%;
  }
`;

export { Wrapper };
