import * as React from "react";
import {
  Wrapper,
  Scene,
  Cube,
  CubeFront,
  CubeBack,
  CubeRight,
  CubeLeft,
  CubeTop,
  CubeBottom,
} from "./styles";

interface BoxProps {
  className?: string;
}

const Box: React.FC<BoxProps> = ({ className, ...rest }) => (
  <Wrapper className={className} {...rest}>
    <Scene>
      <Cube>
        <CubeFront>front</CubeFront>
        <CubeBack>back</CubeBack>
        <CubeRight>right</CubeRight>
        <CubeLeft>left</CubeLeft>
        <CubeTop>top</CubeTop>
        <CubeBottom>bottom</CubeBottom>
      </Cube>
    </Scene>
  </Wrapper>
);

export default Box;
