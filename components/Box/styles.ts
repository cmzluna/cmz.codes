import { lighten } from "polished";
import styled, { css } from "styled-components";
import Image from "next/image";

const Wrapper = styled.div`
  position: absolute;
  z-index: 8;
`;

const Scene = styled.div`
  width: 200px;
  height: 200px;
  perspective: 600px;
  border: 1px solid #ccc;
  margin: 80px;
`;

const Cube = styled.div`
  width: 200px;
  height: 200px;
  perspective: 600px;
`;
const CubeFace = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  font-size: 20px;
  color: white;
`;

const CubeFront = styled(CubeFace)`
  transform: rotateY(0deg);
  background-color: red;
`;

const CubeBack = styled(CubeFace)`
  transform: translateZ(-100px) rotateY(180deg);
`;

const CubeRight = styled(CubeFace)`
  transform: translateZ(-100px) rotateY(90deg);
`;

const CubeLeft = styled(CubeFace)`
  transform: translateZ(-100px) rotateY(-90deg);
`;

const CubeTop = styled(CubeFace)`
  transform: translateZ(-100px) rotateX(90deg);
`;

const CubeBottom = styled(CubeFace)`
  transform: translateZ(-100px) rotateX(-90deg);
`;

export {
  Wrapper,
  Scene,
  Cube,
  CubeFace,
  CubeFront,
  CubeBack,
  CubeRight,
  CubeLeft,
  CubeTop,
  CubeBottom,
};
