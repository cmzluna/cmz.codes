import { Parallax, Background } from "react-parallax";
import Image from "next/image";
import Dog from "../../public/dog.jpg";

const ParallaxComponent = () => (
  <Parallax blur={10} strength={200}>
    <Image src={Dog} alt={"Dog"} />
  </Parallax>
);

export default ParallaxComponent;
