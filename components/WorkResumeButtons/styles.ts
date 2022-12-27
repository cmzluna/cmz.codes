import { lighten } from "polished";
import styled, { css } from "styled-components";
import Image from "next/image";
import LinkedIn from "components/Icons/LinkedIn";
import Button from "components/Button";

const Buttons = styled.div`
  position: absolute;
  z-index: 2;
  width: 100%;

  @media (max-width: 870px) {
    display: flex;
    position: relative;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export { Buttons };
