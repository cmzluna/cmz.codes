import * as React from "react";
import Link from "next/link";

const GitHub = (props: any) => (
  <Link href="https://github.com/cmzluna" target="_blank">
    <svg
      width="50"
      height="50"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 75.3 75.3"
      style={{
        enableBackground: "new 0 0 75.3 75.3",
      }}
      xmlSpace="preserve"
      {...props}
    >
      <path
        style={{
          fill: "none",
        }}
        d="M2.1 2.1h71v71h-71z"
      />
      <path
        d="M37.6 2.1C18 2.1 2.1 18 2.1 37.6c0 15.7 10.2 29 24.3 33.7 1.8.3 2.4-.8 2.4-1.7v-6c-9.9 2.1-12-4.8-12-4.8-1.6-4.1-3.9-5.2-3.9-5.2-3.2-2.2.2-2.2.2-2.2 3.6.3 5.4 3.7 5.4 3.7 3.2 5.4 8.3 3.9 10.3 3 .3-2.3 1.2-3.9 2.3-4.7-7.8-1-16.1-4-16.1-17.6 0-3.9 1.4-7 3.7-9.5-.4-.9-1.6-4.5.4-9.4 0 0 3-1 9.8 3.6 2.8-.8 5.9-1.2 8.9-1.2s6.1.4 8.9 1.2c6.8-4.6 9.8-3.6 9.8-3.6 1.9 4.9.7 8.5.4 9.4 2.3 2.5 3.6 5.6 3.6 9.5 0 13.6-8.3 16.6-16.2 17.5 1.3 1.1 2.4 3.3 2.4 6.6v9.7c0 .9.6 2.1 2.4 1.7 14.1-4.7 24.3-18 24.3-33.7C73.1 18 57.3 2.1 37.6 2.1z"
        style={{
          fillRule: "evenodd",
          clipRule: "evenodd",
        }}
      />
    </svg>
  </Link>
);

export default GitHub;
