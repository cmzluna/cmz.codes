import * as React from "react";
import { Wrapper } from "./styles";

const SelectorCard = (props: any) => {
  const { className } = props;

  return (
    <Wrapper className={className}>
      <svg
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x={0}
        y={0}
        viewBox="0 0 72.3 86.6"
        style={{
          enableBackground: "new 0 0 72.3 86.6",
        }}
        xmlSpace="preserve"
        {...props}
      >
        <style>
          {
            ".st1{fill:#fff}.st2{fill:none;stroke:#646464;stroke-width:.6164;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10}.st3{fill:#646464}.st5{fill:none;stroke:#fff;stroke-width:.6164;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10}"
          }
        </style>
        <defs>
          <path
            id="SVGID_1_"
            d="m6.7 1.8 58.5-.2c3.7 0 6.8 3 6.8 6.7l.3 71.3c0 3.7-3 6.8-6.7 6.8L7 86.6c-3.7 0-6.8-3-6.8-6.7L0 8.6c0-3.7 3-6.8 6.7-6.8z"
          />
        </defs>
        <clipPath id="SVGID_2_">
          <use
            xlinkHref="#SVGID_1_"
            style={{
              overflow: "visible",
            }}
          />
        </clipPath>
        <g
          style={{
            clipPath: "url(#SVGID_2_)",
          }}
        >
          <path
            className="st1"
            d="m1.6 1.8 68.7-.3c.9 0 1.7.7 1.7 1.7v6.1c0 .9-.7 1.7-1.7 1.7l-68.6.3c-.9 0-1.7-.8-1.7-1.7V3.5c0-.9.7-1.6 1.6-1.7z"
          />
          <path
            className="st2"
            d="M7.2 6.3H5v1.1c0 .4.1.6.6.6h1.1c.4 0 .6-.1.6-.6l-.1-1.1zM7.4 5.8v.1c0 .2-.1.3-.3.3L5 6.3c-.2 0-.2-.2-.2-.3v-.1c0-.2.1-.3.3-.3h2.1c.1 0 .2.1.2.2zM6 5.6h-.8v-.2l.2-.2c.1-.1.1-.1.2 0l.4.4zM6.9 5.6h-.8l.4-.4c.1-.1.1-.1.2 0l.2.2v.2z"
          />
          <path
            className="st2"
            d="M5.7 6.3V7c0 .1.1.2.2.1L6 7h.2l.1.1c.1.1.2 0 .2-.1v-.7h-.8z"
          />
          <path
            className="st3"
            d="M11.8 5.3v2.2h.3V4.8h-.3l-1 1.5-1-1.5h-.3v2.7h.3V5.3l1 1.4 1-1.4zm1 1.3h1.6v-.1c0-.1 0-.3-.1-.4 0-.1-.1-.2-.2-.3-.1-.1-.2-.2-.3-.2-.1-.1-.2-.1-.4-.1-.1 0-.3 0-.4.1-.1.1-.2.1-.3.2-.1.1-.2.2-.2.3 0 .1-.1.3-.1.4 0 .2 0 .3.1.4.1.1.1.2.2.3.1.1.2.2.3.2.1 0 .3.1.4.1.2 0 .4 0 .5-.1l.3-.3V7c-.1.1-.2.2-.3.2-.1.1-.2.1-.4.1h-.3c-.1 0-.2-.1-.2-.1 0-.1-.1-.2-.1-.3 0-.1-.1-.2-.1-.3zm0-.2c0-.1 0-.2.1-.3 0 0 .1-.1.1-.2.1-.1.1-.1.2-.1s.2-.1.2-.1c.1 0 .2 0 .3.1.1 0 .1.1.2.1.1.1.1.2.2.2 0 .1.1.2.1.3h-1.4zm2.2 0v-.3c0-.1.1-.1.1-.2.1-.1.1-.1.2-.1h.2c.2 0 .3.1.4.2.1.1.1.3.1.4v1.2h.3V6.4c0-.1 0-.2-.1-.3 0-.1-.1-.2-.2-.3l-.2-.2c-.1 0-.2-.1-.3-.1-.2 0-.3 0-.4.1l-.3.3v-.3h-.3v2h.3l.2-1.2zm3.4.2v.3c0 .1-.1.1-.1.2-.1.1-.1.1-.2.1h-.2c-.2 0-.3-.1-.4-.2-.1-.1-.1-.3-.1-.4V5.4h-.3v1.2c0 .1 0 .2.1.3 0 .1.1.2.2.3l.2.2c.1 0 .2.1.3.1.2 0 .3 0 .4-.1l.3-.3v.3h.3v-2h-.3l-.2 1.2zm2-1.5v-.3h-.3v.3h.3zm0 2.4v-2h-.3v2h.3zm.9-1.7h.6v-.3h-.6v-.6H21v.6h-.3v.3h.3v1.5c0 .1.1.1.1.2.1 0 .1.1.2.1h.4c.1 0 .1 0 .2-.1v-.3c-.1 0-.1 0-.1.1h-.1c-.1 0-.2 0-.2-.1-.1 0-.1-.1-.1-.3l-.1-1.1zm1.1.8H24v-.1c0-.1 0-.3-.1-.4 0-.1-.1-.2-.2-.3-.1-.1-.2-.2-.3-.2-.1-.1-.2-.1-.4-.1-.1 0-.3 0-.4.1-.1.1-.2.1-.3.2-.1.1-.2.2-.2.3 0 .1-.1.3-.1.4 0 .2 0 .3.1.4.1.1.1.2.2.3.1.1.2.2.3.2.1 0 .3.1.4.1.2 0 .4 0 .5-.1l.3-.3V7c-.1.1-.2.2-.3.2-.1.1-.2.1-.4.1h-.3c-.1 0-.2-.1-.2-.1 0-.2-.1-.2-.1-.3 0-.1-.1-.2-.1-.3zm0-.2c0-.1 0-.2.1-.3 0-.1.1-.2.1-.2.1-.1.1-.1.2-.1s.2-.1.2-.1c.1 0 .2 0 .3.1.1 0 .1.1.2.1l.2.2c0 .1.1.2.1.3h-1.4zm3.5-.6c-.1-.1-.1-.2-.2-.3-.1-.1-.2-.1-.4-.1h-.2c-.1 0-.1 0-.2.1-.1 0-.1.1-.1.1l-.1.1v-.3h-.3v2h.3V6c0-.1.1-.1.1-.2.1-.1.1-.1.2-.1h.2c.2 0 .3.1.4.2.1.1.1.2.1.4v1.2h.3V6c0-.1.1-.1.1-.2.1-.1.1-.1.2-.1h.2c.2 0 .3.1.4.2.1.1.2.2.2.4v1.2h.3V6.3c0-.3-.1-.4-.2-.6-.1-.1-.3-.2-.5-.2h-.2c-.1 0-.1 0-.2.1-.1 0-.1.1-.2.1s-.1.1-.2.1z"
          />
          <path className="st2" d="m65.5 7.4.9-.9c.1-.1.1-.3 0-.4l-.9-.9" />
          <path
            className="st1"
            d="m1.7 11.3 68.7-.3c.9 0 1.7.7 1.7 1.7v6.1c0 .9-.7 1.7-1.7 1.7l-68.7.2C.8 20.7 0 19.9 0 19v-6.1c0-.9.8-1.6 1.7-1.6z"
          />
          <path
            className="st2"
            d="M7.2 15.7H5v1.1c0 .4.1.6.6.6h1.1c.4 0 .6-.1.6-.6l-.1-1.1z"
          />
          <path
            className="st2"
            d="M7.4 15.3v.1c0 .2-.1.3-.3.3H5c-.2 0-.3-.1-.3-.3v-.1c0-.2.1-.3.3-.3h2.1c.3 0 .3.1.3.3z"
          />
          <path
            className="st2"
            d="M6.1 15h-.8v-.2l.2-.2c.1-.1.1-.1.2 0l.4.4zM6.9 15h-.8l.4-.4c.1-.1.1-.1.2 0l.2.2c.1.1.1.1 0 .2zM5.7 15.7v.7c0 .1.1.2.2.1l.1-.1h.2l.1.1c.1.1.2 0 .2-.1v-.7h-.8z"
          />
          <path
            className="st3"
            d="M11.8 14.7v2.2h.3v-2.7h-.3l-1 1.5-1-1.5h-.3v2.7h.3v-2.2l1 1.4 1-1.4zm1.1 1.4h1.6V16c0-.1 0-.3-.1-.4 0-.1-.1-.2-.2-.3-.1-.2-.2-.3-.3-.3-.1-.1-.2-.1-.4-.1-.1 0-.3 0-.4.1-.1.1-.2.1-.3.2-.1.1-.2.2-.2.3 0 .1-.1.3-.1.4 0 .2 0 .3.1.4.1.1.1.2.2.3.1.1.2.2.3.2.1 0 .3.1.4.1.2 0 .4 0 .5-.1l.3-.3-.2-.2c-.1.1-.2.2-.3.2-.1.1-.2.1-.4.1h-.3c-.1 0-.2-.1-.2-.1l-.2-.2c.2 0 .2-.1.2-.2zm0-.3c0-.1 0-.2.1-.3 0-.1.1-.2.1-.2.1-.1.1-.1.2-.1s.2-.1.2-.1c.1 0 .2 0 .3.1.1 0 .1.1.2.1.1.1.1.1.1.2s.1.2.1.3h-1.3zm2.2 0v-.3c0-.1.1-.1.1-.2.1-.1.1-.1.2-.1h.2c.2 0 .3.1.4.2.1.1.1.3.1.4V17h.3v-1.2c0-.1 0-.2-.1-.3 0-.1-.1-.2-.2-.3l-.2-.2c-.1 0-.2-.1-.3-.1-.2 0-.3 0-.4.1l-.3.3V15h-.3v2h.3l.2-1.2zm3.3.3v.3c0 .1-.1.1-.1.2-.1.1-.1.1-.2.1h-.2c-.2 0-.3-.1-.4-.2-.1-.1-.1-.3-.1-.4v-1.2h-.3v1.2c0 .1 0 .2.1.3 0 .1.1.2.2.3l.2.2c.1 0 .2.1.3.1.2 0 .3 0 .4-.1l.3-.3v.3h.3v-2h-.3l-.2 1.2zm2.1-1.6v-.3h-.3v.3h.3zm0 2.4v-2h-.3v2h.3zm.9-1.7h.6v-.3h-.6v-.6h-.3v.6h-.3v.3h.3v1.5c0 .1.1.1.1.2.1 0 .1.1.2.1h.4c.1 0 .1 0 .2-.1v-.3c-.1 0-.1 0-.1.1h-.1c-.1 0-.2 0-.2-.1-.1 0-.1-.1-.1-.3l-.1-1.1zm1.1.8h1.6v-.1c0-.1 0-.3-.1-.4 0-.1-.1-.2-.2-.3-.1-.1-.2-.2-.3-.2-.1-.1-.2-.1-.4-.1-.1 0-.3 0-.4.1-.1.1-.2.1-.3.2-.1.1-.2.2-.2.3 0 .1-.1.3-.1.4 0 .2 0 .3.1.4.1.1.1.2.2.3.1.1.2.2.3.2.1 0 .3.1.4.1.2 0 .4 0 .5-.1l.3-.3-.2-.2c-.1.1-.2.2-.3.2-.1.1-.2.1-.4.1h-.3c-.1 0-.2-.1-.2-.1l-.2-.2c.2-.1.2-.2.2-.3zm0-.2c0-.1 0-.2.1-.3 0-.1.1-.2.1-.2.1-.1.1-.1.2-.1s.2-.1.2-.1c.1 0 .2 0 .3.1.1 0 .1.1.2.1.1.1.1.1.1.2s.1.2.1.3h-1.3zm3.5-.6c-.1-.1-.1-.2-.2-.3-.1-.1-.2-.1-.4-.1h-.2c-.1 0-.1 0-.2.1-.1 0-.1.1-.1.1l-.1.1v-.3h-.3v2h.3V15.4c0-.1.1-.1.1-.2.1-.1.1-.1.2-.1h.2c.2 0 .3.1.4.2.1.1.1.2.1.4v1.2h.3v-1.5c0-.1.1-.1.1-.2.1-.1.1-.1.2-.1h.2c.2 0 .3.1.4.2.1.1.1.3.1.4v1.2h.3v-1.2c0-.3-.1-.4-.2-.6-.1-.1-.3-.2-.5-.2h-.2c-.1 0-.1 0-.2.1-.1 0-.1.1-.2.1s-.1.1-.1.1z"
          />
          <path className="st2" d="m65.5 16.8.9-.9c.1-.1.1-.3 0-.4l-.9-.9" />
          <path
            className="st1"
            d="m1.7 20.7 68.7-.3c.9 0 1.7.7 1.7 1.7v6.1c0 .9-.7 1.7-1.7 1.7l-68.7.2c-.9 0-1.7-.7-1.7-1.7v-6.1c0-.9.8-1.6 1.7-1.6z"
          />
          <path
            className="st2"
            d="M7.3 25.1H5.1v1.1c0 .4.1.6.6.6h1.1c.4 0 .6-.1.6-.6l-.1-1.1zM7.5 24.7v.1c0 .2-.1.3-.3.3H5.1c-.2 0-.3-.1-.3-.3v-.1c0-.2.1-.3.3-.3h2.1c.2 0 .3.1.3.3zM6.1 24.4h-.8v-.2l.2-.2h.2l.4.4zM7 24.4h-.8l.4-.4h.2l.2.2v.2z"
          />
          <path
            className="st2"
            d="M5.7 25.1v.7c0 .1.1.2.2.1l.1-.1h.2l.1.1c.1.1.2 0 .2-.1v-.7h-.8z"
          />
          <path
            className="st3"
            d="M11.9 24.2v2.2h.3v-2.7h-.3l-1 1.5-1-1.5h-.3v2.7h.3v-2.2l1 1.4 1-1.4zm1 1.3h1.6v-.1c0-.1 0-.3-.1-.4 0-.1-.1-.2-.2-.3-.1-.1-.2-.2-.3-.2-.1-.1-.2-.1-.4-.1-.1 0-.3 0-.4.1-.1.1-.2.1-.3.2-.1.1-.2.2-.2.3 0 .1-.1.3-.1.4 0 .2 0 .3.1.4.1.1.1.2.2.3.1.1.2.2.3.2.1 0 .3.1.4.1.2 0 .4 0 .5-.1l.3-.3-.2-.2c-.1.1-.2.2-.3.2-.1.1-.2.1-.4.1h-.3c-.1 0-.2-.1-.2-.1l-.2-.2c.2-.1.2-.2.2-.3zm0-.2c0-.1 0-.2.1-.3 0-.1.1-.2.1-.2.1-.1.1-.1.2-.1s.2-.1.2-.1c.1 0 .2 0 .3.1.1 0 .1.1.2.1.1.1.1.1.1.2s.1.2.1.3h-1.3zm2.2-.1v-.3c0-.1.1-.1.1-.2.1-.1.1-.1.2-.1h.2c.2 0 .3.1.4.2.1.1.1.3.1.4v1.2h.3v-1.2c0-.1 0-.2-.1-.3 0-.1-.1-.2-.2-.3l-.2-.2c-.1 0-.2-.1-.3-.1-.2 0-.3 0-.4.1l-.3.3v-.3h-.3v2h.3l.2-1.2zm3.3.3v.3c0 .1-.1.1-.1.2-.1.1-.1.1-.2.1h-.2c-.2 0-.3-.1-.4-.2-.1-.1-.1-.3-.1-.4v-1.2h-.3v1.2c0 .1 0 .2.1.3 0 .1.1.2.2.3l.2.2c.1 0 .2.1.3.1.2 0 .3 0 .4-.1l.3-.3v.3h.3v-2h-.3l-.2 1.2zm2.1-1.6v-.3h-.3v.3h.3zm0 2.4v-2h-.3v2h.3zm.9-1.7h.6v-.3h-.6v-.6h-.3v.6h-.3v.3h.3v1.5c0 .1.1.1.1.2.1 0 .1.1.2.1h.4c.1 0 .1 0 .2-.1V26c-.1 0-.1 0-.1.1h-.1c-.1 0-.2 0-.2-.1-.1 0-.1-.1-.1-.3l-.1-1.1zm1.1.8h1.6v-.1c0-.1 0-.3-.1-.4 0-.1-.1-.2-.2-.3-.1-.1-.2-.2-.3-.2-.1-.1-.2-.1-.4-.1-.1 0-.3 0-.4.1-.1.1-.2.1-.3.2-.1.1-.2.2-.2.3 0 .1-.1.3-.1.4 0 .2 0 .3.1.4.1.1.1.2.2.3.1.1.2.2.3.2.1 0 .3.1.4.1.2 0 .4 0 .5-.1l.3-.3-.2-.2c-.1.1-.2.2-.3.2-.1.1-.2.1-.4.1h-.3c-.1 0-.2-.1-.2-.1l-.2-.2c.2-.1.2-.2.2-.3zm0-.2c0-.1 0-.2.1-.3 0-.1.1-.2.1-.2.1-.1.1-.1.2-.1s.2-.1.2-.1c.1 0 .2 0 .3.1.1 0 .1.1.2.1.1.1.1.1.1.2s.1.2.1.3h-1.3zm3.5-.5c-.1-.1-.1-.2-.2-.3-.1-.1-.2-.1-.4-.1h-.2c-.1 0-.1 0-.2.1-.1 0-.1.1-.1.1l-.1.1v-.3h-.3v2h.3V24.9c0-.1.1-.1.1-.2.1-.1.1-.1.2-.1h.2c.2 0 .3.1.4.2.1.1.1.2.1.4v1.2h.3v-1.5c0-.1.1-.1.1-.2.1-.1.1-.1.2-.1h.2c.2 0 .3.1.4.2.1.1.1.3.1.4v1.2h.3v-1.2c0-.3-.1-.4-.2-.6-.1-.1-.3-.2-.5-.2h-.2c-.1 0-.1 0-.2.1-.1 0-.1.1-.2.1 0 0-.1 0-.1.1z"
          />
          <path className="st2" d="m65.6 26.3.9-.9c.1-.1.1-.3 0-.4l-.9-.9" />
          <path
            className="st1"
            d="m1.9 77.2 68.7-.3c.9 0 1.7.7 1.7 1.7v6.1c0 .9-.7 1.7-1.7 1.7L2 86.6c-.9 0-1.7-.7-1.7-1.7v-6.1c0-.8.7-1.6 1.6-1.6z"
          />
          <path
            className="st2"
            d="M7.5 81.6H5.3v1.1c0 .4.1.6.6.6H7c.4 0 .6-.1.6-.6l-.1-1.1zM7.7 81.2v.1c0 .2-.1.3-.3.3H5.3c-.2 0-.3-.1-.3-.3v-.1c0-.2.1-.3.3-.3h2.1c.2 0 .3.1.3.3zM6.3 80.9h-.8v-.2l.2-.2c.1-.1.1-.1.2 0l.4.4zM7.2 80.9h-.8l.4-.4c.1-.1.1-.1.2 0l.2.2v.2z"
          />
          <path
            className="st2"
            d="M5.9 81.6v.7c0 .1.1.2.2.1l.1-.1h.2l.1.1c.1.1.2 0 .2-.1v-.7h-.8z"
          />
          <path
            className="st3"
            d="M12.1 80.7v2.2h.3v-2.7h-.3l-1 1.5-1-1.5h-.3v2.7h.3v-2.2l1 1.4 1-1.4zm1 1.3h1.6v-.1c0-.1 0-.3-.1-.4s-.1-.2-.2-.3c-.1-.1-.2-.2-.3-.2-.1-.1-.2-.1-.4-.1-.1 0-.3 0-.4.1-.1.1-.2.1-.3.2-.1.1-.2.2-.2.3 0 .1-.1.3-.1.4 0 .2 0 .3.1.4.1.1.1.2.2.3.1.1.2.2.3.2.1 0 .3.1.4.1.2 0 .4 0 .5-.1l.3-.3-.2-.2c-.1.1-.2.2-.3.2-.1.1-.2.1-.4.1h-.3c-.1 0-.2-.1-.2-.1l-.2-.2c.2-.1.2-.2.2-.3zm0-.2c0-.1 0-.2.1-.3 0-.1.1-.2.1-.2.1-.1.1-.1.2-.1s.2-.1.2-.1c.1 0 .2 0 .3.1.1 0 .1.1.2.1.1.1.1.1.1.2s.1.2.1.3h-1.3zm2.2-.1v-.3c0-.1.1-.1.1-.2.1-.1.1-.1.2-.1h.2c.2 0 .3.1.4.2.1.1.1.3.1.4v1.2h.3v-1.2c0-.1 0-.2-.1-.3 0-.1-.1-.2-.2-.3l-.2-.2c-.1 0-.2-.1-.3-.1-.2 0-.3 0-.4.1l-.3.3v-.3h-.3v2h.3l.2-1.2zm3.3.3v.3c0 .1-.1.1-.1.2-.1.1-.1.1-.2.1h-.2c-.2 0-.3-.1-.4-.2-.1-.1-.1-.3-.1-.4v-1.2h-.3V82c0 .1 0 .2.1.3 0 .1.1.2.2.3l.2.2c.1 0 .2.1.3.1.2 0 .3 0 .4-.1l.3-.3v.3h.3v-2h-.3l-.2 1.2zm2.1-1.6v-.3h-.3v.3h.3zm0 2.5v-2h-.3v2h.3zm.9-1.8h.6v-.3h-.6v-.6h-.3v.6H21v.3h.3v1.5c0 .1.1.1.1.2.1 0 .1.1.2.1h.4c.1 0 .1 0 .2-.1v-.3c-.1 0-.1 0-.1.1H22c-.1 0-.2 0-.2-.1-.1 0-.1-.1-.1-.3l-.1-1.1zm1.1.9h1.6v-.1c0-.1 0-.3-.1-.4 0-.1-.1-.2-.2-.3-.1-.1-.2-.2-.3-.2-.1-.1-.2-.1-.4-.1-.1 0-.3 0-.4.1-.1.1-.2.1-.3.2-.1.1-.2.2-.2.3 0 .1-.1.3-.1.4 0 .2 0 .3.1.4.1.1.1.2.2.3.1.1.2.2.3.2.1 0 .3.1.4.1.2 0 .4 0 .5-.1l.3-.3-.1-.2c-.1.1-.2.2-.3.2-.1.1-.2.1-.4.1H23c-.1 0-.2-.1-.2-.1l-.2-.2c.1-.1.1-.2.1-.3zm0-.3c0-.1 0-.2.1-.3 0-.1.1-.2.1-.2.1-.1.1-.1.2-.1s.2-.1.2-.1c.1 0 .2 0 .3.1.1 0 .1.1.2.1.1.1.1.1.1.2s.1.2.1.3h-1.3zm3.5-.5c-.1-.1-.1-.2-.2-.3-.1-.1-.2-.1-.4-.1h-.2c-.1 0-.1 0-.2.1-.1 0-.1.1-.1.1l-.1.1v-.3h-.3v2h.3V81.4c0-.1.1-.1.1-.2.1-.1.1-.1.2-.1h.2c.2 0 .3.1.4.2.1.1.1.2.1.4v1.2h.3v-1.5c0-.1.1-.1.1-.2.1-.1.1-.1.2-.1h.2c.2 0 .3.1.4.2.1.1.1.3.1.4v1.2h.3v-1.2c0-.3-.1-.4-.2-.6-.1-.1-.3-.2-.5-.2h-.2c-.1 0-.1 0-.2.1-.1 0-.1.1-.2.1l-.1.1z"
          />
          <path className="st2" d="m65.8 82.8.9-.9c.1-.1.1-.3 0-.4l-.9-.9" />
          <path
            className="st1"
            d="m1.9 67.8 68.7-.3c.9 0 1.7.7 1.7 1.7v6.1c0 .9-.7 1.7-1.7 1.7l-68.7.2c-.9 0-1.7-.7-1.7-1.7v-6.1c0-.9.8-1.6 1.7-1.6z"
          />
          <path
            className="st2"
            d="M7.4 72.2H5.2v1.1c0 .4.1.6.6.6h1.1c.4 0 .6-.1.6-.6l-.1-1.1zM7.6 71.8v.1c0 .2-.1.3-.3.3H5.2c-.2 0-.3-.1-.3-.3v-.1c0-.2.1-.3.3-.3h2.1c.3 0 .3.1.3.3zM6.3 71.5h-.8v-.2l.2-.2c.1-.1.1-.1.2 0l.4.4z"
          />
          <path
            className="st2"
            d="M7.1 71.5h-.8l.4-.4c.1-.1.1-.1.2 0l.2.2c.1.1.1.2 0 .2zM5.9 72.2v.7c0 .1.1.2.2.1l.1-.1h.2l.1.1c.1.1.2 0 .2-.1v-.7h-.8z"
          />
          <path
            className="st3"
            d="M12.1 71.3v2.2h.3v-2.7h-.3l-1 1.5-1-1.5h-.3v2.7h.3v-2.2l1 1.4 1-1.4zm1 1.3h1.6v-.1c0-.1 0-.3-.1-.4 0-.1-.1-.2-.2-.3-.1-.1-.2-.2-.3-.2-.1-.1-.2-.1-.4-.1-.1 0-.3 0-.4.1-.1.1-.2.1-.3.2-.1.1-.2.2-.2.3 0 .1-.1.3-.1.4 0 .2 0 .3.1.4.1.1.1.2.2.3.1.1.2.2.3.2.1 0 .3.1.4.1.2 0 .4 0 .5-.1l.3-.3-.1-.1c-.1.1-.2.2-.3.2-.1.1-.2.1-.4.1h-.3c-.1 0-.2-.1-.2-.1L13 73c.1-.2.1-.3.1-.4zm0-.3c0-.1 0-.2.1-.3 0-.1.1-.2.1-.2.1-.1.1-.1.2-.1s.2-.1.2-.1c.1 0 .2 0 .3.1.1 0 .1.1.2.1.1.1.1.1.1.2s.1.2.1.3h-1.3zm2.2 0V72c0-.1.1-.1.1-.2.1-.1.1-.1.2-.1h.2c.2 0 .3.1.4.2.1.1.1.3.1.4v1.2h.3v-1.2c0-.1 0-.2-.1-.3 0-.1-.1-.2-.2-.3l-.2-.2c-.1 0-.2-.1-.3-.1-.2 0-.3 0-.4.1l-.3.3v-.3h-.3v2h.3l.2-1.2zm3.3.3v.3c0 .1-.1.1-.1.2-.1.1-.1.1-.2.1h-.2c-.2 0-.3-.1-.4-.2-.1-.1-.1-.3-.1-.4v-1.2h-.3v1.2c0 .1 0 .2.1.3 0 .1.1.2.2.3l.2.2c.1 0 .2.1.3.1.2 0 .3 0 .4-.1l.3-.3v.3h.3v-2h-.3l-.2 1.2zm2.1-1.6v-.3h-.3v.3h.3zm0 2.4v-2h-.3v2h.3zm.9-1.7h.6v-.3h-.6v-.6h-.3v.6H21v.3h.3v1.5c0 .1.1.1.1.2.1 0 .1.1.2.1h.4c.1 0 .1 0 .2-.1v-.3c-.1 0-.1 0-.1.1H22c-.1 0-.2 0-.2-.1-.1 0-.1-.1-.1-.3l-.1-1.1zm1.1.8h1.6v-.1c0-.1 0-.3-.1-.4 0-.1-.1-.2-.2-.3-.1-.1-.2-.2-.3-.2-.1-.1-.2-.1-.4-.1-.1 0-.3 0-.4.1-.1.1-.2.1-.3.2-.1.1-.2.2-.2.3 0 .1-.1.3-.1.4 0 .2 0 .3.1.4.1.1.1.2.2.3.1.1.2.2.3.2.1 0 .3.1.4.1.2 0 .4 0 .5-.1l.3-.3-.1-.1c-.1.1-.2.2-.3.2-.1.1-.2.1-.4.1H23c-.1 0-.2-.1-.2-.1l-.2-.2c.1-.2.1-.3.1-.4zm0-.2c0-.1 0-.2.1-.3 0-.1.1-.2.1-.2.1-.1.1-.1.2-.1s.2-.1.2-.1c.1 0 .2 0 .3.1.1 0 .1.1.2.1.1.1.1.1.1.2s.1.2.1.3h-1.3zm3.5-.5c-.1-.1-.1-.2-.2-.3-.1-.1-.2-.1-.4-.1h-.2c-.1 0-.1 0-.2.1-.1 0-.1.1-.1.1l-.1.1v-.3h-.3v2h.3V72c0-.1.1-.1.1-.2.1-.1.1-.1.2-.1h.2c.2 0 .3.1.4.2.1.1.1.2.1.4v1.2h.3V72c0-.1.1-.1.1-.2.1-.1.1-.1.2-.1h.2c.2 0 .3.1.4.2.1.1.1.3.1.4v1.2h.3v-1.2c0-.3-.1-.4-.2-.6-.1-.1-.3-.2-.5-.2h-.2c-.1 0-.1 0-.2.1-.1 0-.1.1-.2.1 0 0-.1 0-.1.1z"
          />
          <path className="st2" d="m65.7 73.3.9-.9c.1-.1.1-.3 0-.4l-.9-.9" />
          <path
            d="m1.7 30.1 68.7-.3c.9 0 1.7.7 1.7 1.7v6.1c0 .9-.7 1.7-1.7 1.7l-68.6.2c-.9 0-1.7-.7-1.7-1.7v-6.1c0-.8.7-1.6 1.6-1.6z"
            style={{
              fill: "#3782ff",
            }}
          />
          <path
            className="st5"
            d="M7.3 34.5H5.1v1.1c0 .4.1.6.6.6h1.1c.4 0 .6-.1.6-.6l-.1-1.1zM7.5 34.1v.1c0 .2-.1.3-.3.3H5.1c-.2 0-.3-.1-.3-.3v-.1c0-.2.1-.3.3-.3h2.1c.2 0 .3.1.3.3zM6.1 33.8h-.8v-.2l.2-.2c.1-.1.1-.1.2 0l.4.4zM7 33.8h-.8l.4-.4c.1-.1.1-.1.2 0l.2.2v.2z"
          />
          <path
            className="st5"
            d="M5.8 34.5v.7c0 .1.1.2.2.1l.1-.1h.2l.1.1c.1.1.2 0 .2-.1v-.7h-.8z"
          />
          <path
            className="st1"
            d="M11.9 33.6v2.2h.3v-2.7h-.3l-1 1.5-1-1.5h-.3v2.7h.3v-2.2l1 1.4 1-1.4zm1 1.3h1.6v-.1c0-.1 0-.3-.1-.4 0-.1-.1-.2-.2-.3-.1-.1-.2-.2-.3-.2-.1-.1-.2-.1-.4-.1-.1 0-.3 0-.4.1-.1.1-.2.1-.3.2-.1.1-.2.2-.2.3 0 .1-.1.3-.1.4 0 .2 0 .3.1.4.1.1.1.2.2.3.1.1.2.2.3.2.1 0 .3.1.4.1.2 0 .4 0 .5-.1l.3-.3-.2-.2c-.1.1-.2.2-.3.2-.1.1-.2.1-.4.1h-.3c-.1 0-.2-.1-.2-.1l-.2-.2c.3-.1.2-.2.2-.3zm0-.2c0-.1 0-.2.1-.3 0-.1.1-.2.1-.2.1-.1.1-.1.2-.1s.2-.1.2-.1c.1 0 .2 0 .3.1.1 0 .1.1.2.1.1.1.1.1.1.2s.1.2.1.3h-1.3zm2.2-.1v-.3c0-.1.1-.1.1-.2.1-.1.1-.1.2-.1h.2c.2 0 .3.1.4.2.1.1.1.3.1.4v1.2h.3v-1.2c0-.1 0-.2-.1-.3 0-.1-.1-.2-.2-.3l-.2-.2c-.1 0-.2-.1-.3-.1-.2 0-.3 0-.4.1l-.3.3v-.3h-.3v2h.3l.2-1.2zm3.4.3v.3c0 .1-.1.1-.1.2-.1.1-.1.1-.2.1H18c-.2 0-.3-.1-.4-.2-.1-.1-.1-.3-.1-.4v-1.2h-.3v1.2c0 .1 0 .2.1.3 0 .1.1.2.2.3l.2.2c.1 0 .2.1.3.1.2 0 .3 0 .4-.1l.3-.3v.3h.3v-2h-.3l-.2 1.2zm2.1-1.6V33h-.3v.3h.3zm-.1 2.5v-2h-.3v2h.3zm.9-1.8h.6v-.3h-.6v-.6h-.3v.6h-.3v.3h.3v1.5c0 .1.1.1.1.2.1 0 .1.1.2.1h.4c.1 0 .1 0 .2-.1v-.3c-.1 0-.1 0-.1.1h-.1c-.1 0-.2 0-.2-.1-.1 0-.1-.1-.1-.3l-.1-1.1zm1.1.9h1.6v-.1c0-.1 0-.3-.1-.4 0-.1-.1-.2-.2-.3-.1-.1-.2-.2-.3-.2-.1-.1-.2-.1-.4-.1-.1 0-.3 0-.4.1-.1.1-.2.1-.3.2-.1.1-.2.2-.2.3 0 .1-.1.3-.1.4 0 .2 0 .3.1.4.1.1.1.2.2.3.1.1.2.2.3.2.1 0 .3.1.4.1.2 0 .4 0 .5-.1l.3-.3-.2-.2c-.1.1-.2.2-.3.2-.1.1-.2.1-.4.1h-.3c-.1 0-.2-.1-.2-.1l-.2-.2c.3-.1.2-.2.2-.3zm0-.3c0-.1 0-.2.1-.3 0-.1.1-.2.1-.2.1-.1.1-.1.2-.1s.2-.1.2-.1c.1 0 .2 0 .3.1.1 0 .1.1.2.1.1.1.1.1.1.2s.1.2.1.3h-1.3zm3.5-.5c-.1-.1-.1-.2-.2-.3-.1-.1-.2-.1-.4-.1h-.2c-.1 0-.1 0-.2.1-.1 0-.1.1-.1.1l-.1.1v-.3h-.3v2h.3V34.3c0-.1.1-.1.1-.2.1 0 .1-.1.2-.1h.2c.2 0 .3.1.4.2.1.1.1.2.1.4v1.2h.3v-1.5c0-.1.1-.1.1-.2.1-.1.1-.1.2-.1h.2c.2 0 .3.1.4.2.1.1.1.3.1.4v1.2h.3v-1.2c0-.3-.1-.4-.2-.6-.1-.1-.3-.2-.5-.2h-.2c-.1 0-.1 0-.2.1-.1 0-.1.1-.2.1l-.1.1z"
          />
          <path className="st5" d="m67.1 34.1-.9.9c-.1.1-.3.1-.4 0l-.9-.9" />
          <path
            className="st1"
            d="m1.8 58.6 68.7-.3c.8 0 1.4.6 1.4 1.4v6.1c0 .8-.6 1.4-1.4 1.4l-68.6.3c-.8 0-1.4-.6-1.4-1.4V60c0-.7.6-1.4 1.3-1.4z"
          />
          <path
            d="M11.7 61.8V64h.3v-2.7h-.3l-1 1.5-1-1.5h-.3V64h.3v-2.2l1 1.4 1-1.4zm1.1 1.4h1.6v-.1c0-.1 0-.3-.1-.4 0-.1-.1-.2-.2-.3s-.2-.2-.3-.2c-.1-.2-.2-.2-.4-.2-.1 0-.3 0-.4.1-.1.1-.2.1-.3.2-.1.1-.2.2-.2.3 0 .1-.1.3-.1.4 0 .2 0 .3.1.4.1.1.1.2.2.3.1.1.2.2.3.2.1 0 .3.1.4.1.2 0 .4 0 .5-.1l.3-.3-.2-.2c-.1.1-.2.2-.3.2-.1.1-.2.1-.4.1H13c-.1 0-.2-.1-.2-.1l-.2-.2c.2 0 .2-.1.2-.2zm0-.3c0-.1 0-.2.1-.3 0-.1.1-.2.1-.2.1-.1.1-.1.2-.1s.2-.1.2-.1c.1 0 .2 0 .3.1.1 0 .1.1.2.1.1.1.1.1.1.2s.1.2.1.3h-1.3zm2.2 0v-.3c0-.1.1-.1.1-.2.1-.1.1-.1.2-.1h.2c.2 0 .3.1.4.2.1.1.1.3.1.4v1.2h.3v-1.2c0-.1 0-.2-.1-.3 0-.1-.1-.2-.2-.3l-.2-.2c-.1 0-.2-.1-.3-.1-.2 0-.3 0-.4.1l-.3.3v-.3h-.3v2h.3l.2-1.2zm3.3.3v.3c0 .1-.1.1-.1.2-.1.1-.1.1-.2.1h-.2c-.2 0-.3-.1-.4-.2-.1-.1-.1-.3-.1-.4V62H17v1.2c0 .1 0 .2.1.3 0 .1.1.2.2.3l.2.2c.1 0 .2.1.3.1.2 0 .3 0 .4-.1l.3-.3v.3h.3v-2h-.3l-.2 1.2zm2.1-1.6v-.3h-.3v.3h.3zm0 2.4v-2h-.3v2h.3zm.9-1.7h.6V62h-.6v-.6H21v.6h-.3v.3h.3v1.5c0 .1.1.1.1.2.1 0 .1.1.2.1h.4c.1 0 .1 0 .2-.1v-.3c-.1 0-.1 0-.1.1h-.1c-.1 0-.2 0-.2-.1-.1 0-.1-.1-.1-.3l-.1-1.1zm1.1.8H24V63c0-.1 0-.3-.1-.4 0-.1-.1-.2-.2-.3-.1-.1-.2-.2-.3-.2-.1-.1-.2-.1-.4-.1-.1 0-.3 0-.4.1-.1.1-.2.1-.3.2-.1.1-.2.2-.2.3 0 .1-.1.3-.1.4 0 .2 0 .3.1.4.1.1.1.2.2.3.1.1.2.2.3.2.1 0 .3.1.4.1.2 0 .4 0 .5-.1l.3-.3-.2-.2c-.1.1-.2.2-.3.2-.1.1-.2.1-.4.1h-.3c-.1 0-.2-.1-.2-.1l-.2-.2c.2-.1.2-.2.2-.3zm0-.2c0-.1 0-.2.1-.3 0-.1.1-.2.1-.2.1-.1.1-.1.2-.1s.2-.1.2-.1c.1 0 .2 0 .3.1.1 0 .1.1.2.1.1.1.1.1.1.2s.1.2.1.3h-1.3zm3.5-.6c-.1-.1-.1-.2-.2-.3-.1-.1-.2-.1-.4-.1h-.2c-.1 0-.1 0-.2.1-.1 0-.1.1-.1.1l-.1.1v-.3h-.3v2h.3V62.5c0-.1.1-.1.1-.2.1-.1.1-.1.2-.1h.2c.2 0 .3.1.4.2.1.1.1.2.1.4V64h.3v-1.5c0-.1.1-.1.1-.2.1-.1.1-.1.2-.1h.2c.2 0 .3.1.4.2.1.1.1.3.1.4V64h.3v-1.2c0-.3-.1-.4-.2-.6-.1-.1-.3-.2-.5-.2h-.2c-.1 0-.1 0-.2.1-.1 0-.1.1-.2.1s-.1.1-.1.1z"
            style={{
              fill: "#784dc7",
            }}
          />
          <path
            d="m1.8 58.6 68.7-.3c.8 0 1.4.6 1.4 1.4v6.1c0 .8-.6 1.4-1.4 1.4l-68.6.3c-.8 0-1.4-.6-1.4-1.4V60c0-.7.6-1.4 1.3-1.4z"
            style={{
              fill: "none",
              stroke: "#3782ff",
              strokeWidth: 1.6438,
            }}
          />
          <path
            className="st1"
            d="m1.8 39.5 68.7-.3c.9 0 1.7.7 1.7 1.7V47c0 .9-.7 1.7-1.7 1.7l-68.7.2c-.9 0-1.7-.7-1.7-1.7v-6.1c0-.8.8-1.6 1.7-1.6z"
          />
          <path
            className="st3"
            d="M11.7 43v2.2h.3v-2.7h-.3l-1 1.5-1-1.5h-.3v2.7h.3V43l1 1.4 1-1.4zm1 1.3h1.6v-.1c0-.1 0-.3-.1-.4 0-.1-.1-.2-.2-.3-.1-.1-.2-.2-.3-.2-.1-.1-.2-.1-.4-.1-.1 0-.3 0-.4.1-.1.1-.2.1-.3.2-.1.1-.2.2-.2.3 0 .1-.1.3-.1.4 0 .2 0 .3.1.4.1.1.1.2.2.3.1.1.2.2.3.2.1 0 .3.1.4.1.2 0 .4 0 .5-.1l.3-.3-.1-.1c-.1.1-.2.2-.3.2 0 .1-.2.1-.3.1h-.3c-.1 0-.2-.1-.2-.1l-.2-.2v-.4zm0-.2c0-.1 0-.2.1-.3 0-.1.1-.2.1-.2.1-.1.1-.1.2-.1s.2-.1.2-.1c.1 0 .2 0 .3.1.1 0 .1.1.2.1.1.1.1.1.1.2s.1.2.1.3h-1.3zm2.2-.1v-.3c0-.1.1-.1.1-.2.1-.1.1-.1.2-.1h.2c.2 0 .3.1.4.2.1.1.1.3.1.4v1.2h.3V44c0-.1 0-.2-.1-.3 0-.1-.1-.2-.2-.3l-.2-.2c-.1 0-.2-.1-.3-.1-.2 0-.3 0-.4.1l-.3.3v-.3h-.3v2h.3l.2-1.2zm3.3.3v.3c0 .1-.1.1-.1.2-.1.1-.1.1-.2.1h-.2c-.2 0-.3-.1-.4-.2-.1-.1-.1-.3-.1-.4v-1.2h-.3v1.2c0 .1 0 .2.1.3 0 .1.1.2.2.3l.2.2c.1 0 .2.1.3.1.2 0 .3 0 .4-.1l.3-.3v.3h.3v-2h-.3l-.2 1.2zm2.1-1.6v-.3H20v.3h.3zm0 2.5v-2H20v2h.3zm.9-1.8h.6v-.3h-.6v-.6h-.3v.6h-.3v.3h.3v1.5c0 .1.1.1.1.2.1 0 .1.1.2.1h.4c.1 0 .1 0 .2-.1v-.3c-.1 0-.1 0-.1.1h-.1c-.1 0-.2 0-.2-.1-.1 0-.1-.1-.1-.3l-.1-1.1zm1.1.9h1.6v-.1c0-.1 0-.3-.1-.4 0-.1-.1-.2-.2-.3-.1-.1-.2-.2-.3-.2-.1-.1-.2-.1-.4-.1-.1 0-.3 0-.4.1-.1.1-.2.1-.3.2-.1.1-.2.2-.2.3 0 .1-.1.3-.1.4 0 .2 0 .3.1.4.1.1.1.2.2.3.1.1.2.2.3.2.1 0 .3.1.4.1.2 0 .4 0 .5-.1l.3-.3-.2-.2c-.1.1-.2.2-.3.2.1.1-.1.2-.2.2h-.3c-.1 0-.2-.1-.2-.1l-.2-.2v-.4zm0-.2c0-.1 0-.2.1-.3 0-.1.1-.2.1-.2.1-.1.1-.1.2-.1s.2-.1.2-.1c.1 0 .2 0 .3.1.1 0 .1.1.2.1.1.1.1.1.1.2s.1.2.1.3h-1.3zm3.5-.6c-.1-.1-.1-.2-.2-.3-.1-.1-.2-.1-.4-.1H25c-.1 0-.1 0-.2.1-.1 0-.1.1-.1.1l-.1.1v-.3h-.3v2h.3V43.7c0-.1.1-.1.1-.2.1-.1.1-.1.2-.1h.2c.2 0 .3.1.4.2.1.1.1.2.1.4v1.2h.3v-1.5c0-.1.1-.1.1-.2.1-.1.1-.1.2-.1h.2c.2 0 .3.1.4.2.1.1.1.3.1.4v1.2h.3V44c0-.3-.1-.4-.2-.6-.1-.1-.3-.2-.5-.2h-.2c-.1 0-.1 0-.2.1-.1 0-.1.1-.2.1l-.1.1z"
          />
          <path
            className="st1"
            d="m1.8 48.9 68.7-.3c.9 0 1.7.7 1.7 1.7v6.1c0 .9-.7 1.7-1.7 1.7l-68.7.3c-.9 0-1.7-.7-1.7-1.7v-6.1c.1-.9.8-1.7 1.7-1.7z"
          />
          <path
            className="st3"
            d="M11.7 52.4v2.2h.3v-2.7h-.3l-1 1.5-1-1.5h-.3v2.7h.3v-2.2l1 1.4 1-1.4zm1 1.3h1.6v-.1c0-.1 0-.3-.1-.4 0-.1-.1-.2-.2-.3-.1-.1-.2-.2-.3-.2-.1-.1-.2-.1-.4-.1-.1 0-.3 0-.4.1-.1.1-.2.1-.3.2-.1.1-.2.2-.2.3 0 .1-.1.3-.1.4 0 .2 0 .3.1.4.1.1.1.2.2.3.1.1.2.2.3.2.1 0 .3.1.4.1.2 0 .4 0 .5-.1l.3-.3-.2-.2c-.1.1-.2.2-.3.2-.1.1-.2.1-.4.1h-.3c-.1 0-.2-.1-.2-.1l-.2-.2c.3-.1.2-.2.2-.3zm0-.2c0-.1 0-.2.1-.3 0-.1.1-.2.1-.2.1-.1.1-.1.2-.1s.2-.1.2-.1c.1 0 .2 0 .3.1.1 0 .1.1.2.1.1.1.1.1.1.2s.1.2.1.3h-1.3zm2.2 0v-.3c0-.1.1-.1.1-.2.1-.1.1-.1.2-.1h.2c.2 0 .3.1.4.2.1.1.1.3.1.4v1.2h.3v-1.2c0-.1 0-.2-.1-.3 0-.1-.1-.2-.2-.3l-.2-.2c-.1 0-.2-.1-.3-.1-.2 0-.3 0-.4.1l-.3.3v-.3h-.3v2h.3l.2-1.2zm3.4.2v.3c0 .1-.1.1-.1.2-.1.1-.1.1-.2.1h-.2c-.2 0-.3-.1-.4-.2-.1-.1-.1-.3-.1-.4v-1.2H17v1.2c0 .1 0 .2.1.3 0 .1.1.2.2.3l.2.2c.1 0 .2.1.3.1.2 0 .3 0 .4-.1l.3-.3v.3h.3v-2h-.3l-.2 1.2zm2-1.5v-.3H20v.3h.3zm0 2.4v-2H20v2h.3zm.9-1.8h.6v-.3h-.6v-.6h-.3v.6h-.3v.3h.3v1.5c0 .1.1.1.1.2.1 0 .1.1.2.1h.4c.1 0 .1 0 .2-.1v-.3c-.1 0-.1 0-.1.1h-.1c-.1 0-.2 0-.2-.1-.1 0-.1-.1-.1-.3l-.1-1.1zm1.1.9h1.6v-.1c0-.1 0-.3-.1-.4 0-.1-.1-.2-.2-.3-.1-.1-.2-.2-.3-.2-.1-.1-.2-.1-.4-.1-.1 0-.3 0-.4.1-.1.1-.2.1-.3.2-.1.1-.2.2-.2.3 0 .1-.1.3-.1.4 0 .2 0 .3.1.4.1.1.1.2.2.3.1.1.2.2.3.2.1 0 .3.1.4.1.2 0 .4 0 .5-.1l.3-.3-.2-.2c-.1.1-.2.2-.3.2-.1.1-.2.1-.4.1h-.3c-.1 0-.2-.1-.2-.1l-.2-.2c.3-.1.2-.2.2-.3zm0-.2c0-.1 0-.2.1-.3 0-.1.1-.2.1-.2.1-.1.1-.1.2-.1s.2-.1.2-.1c.1 0 .2 0 .3.1.1 0 .1.1.2.1.1.1.1.1.1.2s.1.2.1.3h-1.3zm3.5-.6c-.1-.1-.1-.2-.2-.3-.1-.1-.2-.1-.4-.1H25c-.1 0-.1 0-.2.1-.1 0-.1.1-.1.1l-.1.1v-.3h-.3v2h.3V53.1c0-.1.1-.1.1-.2.1-.1.1-.1.2-.1h.2c.2 0 .3.1.4.2.1.1.1.2.1.4v1.2h.3v-1.5c0-.1.1-.1.1-.2.1-.1.1-.1.2-.1h.2c.2 0 .3.1.4.2.1.1.1.3.1.4v1.2h.3v-1.2c0-.3-.1-.4-.2-.6-.1-.1-.3-.2-.5-.2h-.2c-.1 0-.1 0-.2.1-.1 0-.1.1-.2.1 0 0 0 .1-.1.1z"
          />
        </g>
      </svg>
    </Wrapper>
  );
};

export default SelectorCard;
