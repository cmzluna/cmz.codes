import * as React from "react";
import { Wrapper } from "./styles";

const CheckCard = (props) => {
  const { className } = props;

  return (
    <Wrapper className={className}>
      <svg
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        x={0}
        y={0}
        viewBox="0 0 141.2 35.9"
        style={{
          enableBackground: "new 0 0 141.2 35.9",
        }}
        xmlSpace="preserve"
        {...props}
      >
        <style>
          {
            ".st1{fill:#f5f6f7;stroke:#3d3d3c;stroke-width:.96;stroke-linecap:round;stroke-linejoin:round}"
          }
        </style>
        <title>{"circleSeparator"}</title>
        <path
          d="M7.4.2 133.8 0c4 0 7.4 3.3 7.4 7.4v21c0 4-3.3 7.4-7.4 7.4L7.4 36c-4 0-7.4-3.3-7.4-7.4V7.5C0 3.5 3.3.2 7.4.2z"
          style={{
            fill: "#fff",
            stroke: "#3d3d3c",
            strokeWidth: 0.96,
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }}
        />
        <path
          className="st1"
          d="m44.6 9.5 77.2-.1c1.1 0 2 .9 2 2V13c0 1.1-.9 2-2 2l-77.2.1c-1.1 0-2-.9-2-2v-1.6c-.1-1.1.8-2 2-2zM44.5 22.3h25.7c1.1 0 2 .9 2 2v1.5c0 1.1-.9 2-2 2H44.5c-1.1 0-2-.9-2-2v-1.5c.1-1 .9-2 2-2zM77.6 22.3h25.7c1.1 0 2 .9 2 2v1.5c0 1.1-.9 2-2 2H77.6c-1.1 0-2-.9-2-2v-1.5c-.1-1.1.8-2 2-2z"
        />
        <path
          d="M21.6 25.1c-.5 0-1.1-.2-1.5-.5l-7.4-6.8c-.9-.8-1-2.2-.1-3.1.8-.9 2.2-1 3.1-.1l5.9 5.4L32 10.1c.8-.9 2.2-.8 3.1.1.9.8.8 2.2-.1 3.1L23 24.8c-.2.1-.8.3-1.4.3z"
          style={{
            fill: "#3782ff",
            stroke: "#3d3d3c",
            strokeWidth: 0.96,
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }}
        />
        <path
          d="m19.9 6.9-1 1.1 1-1.1z"
          style={{
            fill: "#f5f6f7",
          }}
        />
      </svg>
    </Wrapper>
  );
};

export default CheckCard;
