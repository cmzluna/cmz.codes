import Button from "components/Button";
import Link from "next/link";
import React from "react";
import { Buttons } from "./styles";

interface Props {
  contact?: boolean;
  className?: string;
}

const WorkResumeButtons: React.FC<Props> = ({ contact, className }) => {
  return (
    <Buttons className={className}>
      <Link href="#portfolio">
        <Button>My Work</Button>
      </Link>

      {contact ? (
        <Link href="mailto: claudiomazzoli@gmail.com">
          <Button>Contact Me!</Button>
        </Link>
      ) : (
        <Link
          href="https://docs.google.com/document/d/1W4ym6tK3ZrtQtgvrFK8lOq-5QJRK9NoWVg6H2lgLwiA/edit?usp=sharing"
          target="_blank"
        >
          <Button>My Resume</Button>
        </Link>
      )}
    </Buttons>
  );
};

export default WorkResumeButtons;
