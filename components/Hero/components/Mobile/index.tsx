import * as React from "react";
import { Wrapper } from "./styles";

const Mobile = (props) => {
  const { className } = props;

  return (
    <Wrapper className={className}>
      <svg
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        x={0}
        y={0}
        viewBox="0 0 48.3 88.8"
        style={{
          enableBackground: "new 0 0 48.3 88.8",
        }}
        xmlSpace="preserve"
        {...props}
      >
        <style>
          {
            ".st1{fill:#fff;stroke:#3d3d3c;stroke-width:.96;stroke-linecap:round;stroke-linejoin:round}.st3{fill:#f5f6f7}"
          }
        </style>
        <title>{"circleSeparator"}</title>
        <path
          d="M6.1 0h35.2c3.4 0 6 2.7 6.1 6.1v76.6c0 3.4-2.7 6-6.1 6.1H6.1c-3.4 0-6-2.7-6.1-6.1V6.1C0 2.7 2.8 0 6.1 0z"
          style={{
            fill: "#ecedee",
            stroke: "#3d3d3c",
            strokeWidth: 0.96,
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }}
        />
        <path
          className="st1"
          d="M39.4 2.2h-3.1c-1 0-1.8.9-1.8 1.8 0 1-.8 1.8-1.8 1.8l-18 .1c-1 0-1.7-.8-1.8-1.8 0-1-.8-1.9-1.8-1.8L8 2.2c-3 .1-5.5 2.5-5.6 5.6v71.9c0 3.1 2.5 5.7 5.5 5.6l31.4.1c3.1-.1 5.6-2.5 5.6-5.6v-72c.1-3.1-2.4-5.6-5.5-5.6z"
        />
        <path
          className="st1"
          d="M9.1 11.5h29.1c2 0 3.5 1.6 3.6 3.5l-.1 34.6c0 2-1.6 3.5-3.5 3.6H9.1c-2 0-3.5-1.6-3.6-3.5l.1-34.6c0-2 1.6-3.6 3.5-3.6z"
        />
        <path
          d="M9.4 57.7H38c2.2 0 3.8 1.7 3.8 3.8h0c0 2.2-1.7 3.8-3.8 3.8H9.4c-2.2 0-3.8-1.7-3.8-3.8h0c0-2.1 1.7-3.9 3.8-3.8z"
          style={{
            fill: "#3782ff",
            stroke: "#3d3d3c",
            strokeWidth: 0.96,
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }}
        />
        <path
          className="st1"
          d="M9.4 68.3H38c2.2 0 3.8 1.7 3.8 3.8h0c0 2.2-1.7 3.8-3.8 3.8H9.4c-2.2 0-3.8-1.7-3.8-3.8h0c0-2.1 1.7-3.8 3.8-3.8z"
        />
        <path
          className="st3"
          d="M13.6 15.3c-1.6.9-3.1 2.2-4.2 3.7l4.2-3.7zM33.2 70.9l-1 1.1 1-1.1z"
        />
        <path
          d="m33.2 70.9-1 1.1"
          style={{
            fill: "none",
            stroke: "#3d3d3c",
            strokeWidth: 0.96,
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }}
        />
      </svg>
    </Wrapper>
  );
};

export default Mobile;
