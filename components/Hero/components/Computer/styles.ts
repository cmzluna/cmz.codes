import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  width: 65%;
  bottom: 8%;
  right: 5%;
  opacity: 0;
  animation: pop-in 1s 0.5s ease-out forwards;
  & svg .cls-8,
  .cls-7,
  .cls-6,
  .cls-9 {
    transform-origin: bottom;
    transform-box: fill-box;
    animation: leafanimation 2s ease-in infinite;
  }

  @media (max-width: 870px) {
    bottom: 5%;
    right: 4%;
    width: 55%;
  }
`;

export { Wrapper };
