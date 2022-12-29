import * as React from "react";
import Link from "next/link";
import { Wrapper } from "./styles";

interface LinkedInProps {
  className?: string;
  width?: number;
  fill: string;
}

const LinkedIn: React.FC<LinkedInProps> = (props) => {
  const { className } = props;
  return (
    <Wrapper className={className} {...props}>
      <Link
        href="https://www.linkedin.com/in/claudio-mazzoli/"
        target="_blank"
        {...props}
      >
        <svg
          width="50"
          height="50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 75.3 75.3"
          style={{}}
          xmlSpace="preserve"
          {...props}
        >
          <path d="M69.2-1H6.1C2.7-1 0 1.7 0 5v63.2c0 3.3 2.7 6.1 6.1 6.1h63.2c3.3 0 6.1-2.7 6.1-6.1V5c-.1-3.3-2.8-6-6.2-6zm0 69.3H6C6 26.1 6 5 6.1 5h63.2c0 42.2 0 63.3-.1 63.3zm-58-41.1h11.2v35.9H11.2V27.2zm5.6-4.9c3.6 0 6.5-2.9 6.5-6.5s-2.9-6.5-6.5-6.5-6.5 2.9-6.5 6.5 2.9 6.5 6.5 6.5zm23.7 23.1c0-4.7.9-9.2 6.7-9.2 5.7 0 5.8 5.4 5.8 9.5v17.5h11.2V43.4c0-9.7-2.1-17.1-13.4-17.1-5.4 0-9.1 3-10.6 5.8H40v-4.9H29.3v35.9h11.2V45.4z" />
        </svg>
      </Link>
    </Wrapper>
  );
};

export default LinkedIn;
