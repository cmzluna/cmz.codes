import * as React from "react";
import { Wrapper } from "./styles";

interface Props {
  isLightOn: boolean;
}

const Lamp = (props: any) => {
  const { isLightOn = true } = props;

  // TODO: transition smoothly between Themes
  // https://stackoverflow.com/questions/73608068/transition-between-two-svg-react
  return (
    <Wrapper>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 460 537"
        style={{
          enableBackground: "new 0 0 460 537",
        }}
        xmlSpace="preserve"
        {...props}
      >
        <path
          style={{
            stroke: "#afafaf",
            strokeMiterlimit: 10,
          }}
          d="M244.6.2h1.6v155h-1.6z"
        />
        <ellipse
          cx={245}
          cy={210.6}
          rx={10.2}
          ry={12}
          style={{
            fill: "#fff",
          }}
        />
        {isLightOn && (
          <>
            <linearGradient
              id="a"
              gradientUnits="userSpaceOnUse"
              x1={243.642}
              y1={-127.941}
              x2={230.73}
              y2={511.221}
            >
              <stop
                offset={0.074}
                style={{
                  stopColor: "#ff0",
                }}
              />
              <stop
                offset={1}
                style={{
                  stopColor: "#fff",
                  stopOpacity: 0,
                }}
              />
            </linearGradient>
            <path
              style={{
                fill: "url(#a)",
              }}
              d="M460 536.7H.4l201.4-329.6h87.1z"
            />
            <path d="M284.9 211.2h-79.1c-2.2 0-4-1.8-4-4 0-17.5 14.2-31.6 31.6-31.6h23.8c17.5 0 31.6 14.2 31.6 31.6.1 2.2-1.7 4-3.9 4z" />
          </>
        )}
        <linearGradient
          id="b"
          gradientUnits="userSpaceOnUse"
          x1={245.167}
          y1={186.603}
          x2={245.454}
          y2={213.055}
        >
          <stop
            offset={0}
            style={{
              stopColor: "#000",
            }}
          />
          <stop
            offset={0.196}
            style={{
              stopColor: "#040404",
              stopOpacity: 0.8431,
            }}
          />
          <stop
            offset={0.37}
            style={{
              stopColor: "#0e0e0e",
              stopOpacity: 0.7043,
            }}
          />
        </linearGradient>
        <path
          d="M259.7 175.6v-6.3c0-7.9-6.4-14.3-14.3-14.3s-14.3 6.4-14.3 14.3v6.3c-16.3 1.2-29.2 14.9-29.2 31.5 0 2.2 1.8 4 4 4H285c2.2 0 4-1.8 4-4-.1-16.6-12.9-30.3-29.3-31.5z"
          style={{
            fill: "url(#b)",
            stroke: (isLightOn && "#afafaf") || "#000",
            strokeMiterlimit: 10,
          }}
        />
        <path
          d="M251.2 179.2s28.9 3.6 32.3 28.3c-1.2-1.2-13.4-22.9-32.3-28.3z"
          style={{
            opacity: 0.5,
            fill: "#fff",
          }}
        />
      </svg>
    </Wrapper>
  );
};

export default Lamp;
