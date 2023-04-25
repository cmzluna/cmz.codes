import dynamic from "next/dynamic";

// SiCss3,
// 	SiExpress,
// 	SiGit,
// 	SiHtml5,
// 	SiJavascript,
// 	SiMaterialui,
// 	SiNodedotjs,
// 	SiPostgresql,
// 	SiReact,
// 	SiRedux,
// 	SiSequelize,
// 	SiStyledcomponents,
// 	SiTailwindcss,
// 	SiMongodb,

// https://github.com/vercel/next.js/issues/5208
// https://github.com/vercel/next.js/blob/canary/examples/with-dynamic-import/pages/index.tsx
const CSS3 = dynamic(() => import("react-icons/si").then((mod) => mod.SiCss3));
const Express = dynamic(() =>
  import("react-icons/si").then((mod) => mod.SiExpress)
);
const Git = dynamic(() => import("react-icons/si").then((mod) => mod.SiGit));
const Javascript = dynamic(() =>
  import("react-icons/si").then((mod) => mod.SiJavascript)
);
const Node = dynamic(() =>
  import("react-icons/si").then((mod) => mod.SiNodedotjs)
);
const PostgreSQL = dynamic(() =>
  import("react-icons/si").then((mod) => mod.SiPostgresql)
);
const HTML5 = dynamic(() =>
  import("react-icons/si").then((mod) => mod.SiHtml5)
);
const React = dynamic(() =>
  import("react-icons/si").then((mod) => mod.SiReact)
);
const ReactNavigation = dynamic(() =>
  import("react-icons/si").then((mod) => mod.SiNaver)
);
const Auth0 = dynamic(() =>
  import("react-icons/si").then((mod) => mod.SiAuth0)
);
const Redux = dynamic(() =>
  import("react-icons/si").then((mod) => mod.SiRedux)
);
const Sequelize = dynamic(() =>
  import("react-icons/si").then((mod) => mod.SiSequelize)
);
const StyledComponents = dynamic(() =>
  import("react-icons/si").then((mod) => mod.SiStyledcomponents)
);
const MongoDB = dynamic(() =>
  import("react-icons/si").then((mod) => mod.SiMongodb)
);
const Typescript = dynamic(() =>
  import("react-icons/si").then((mod) => mod.SiTypescript)
);

const Nextdotjs = dynamic(() =>
  import("react-icons/si").then((mod) => mod.SiNextdotjs)
);

const Firebase = dynamic(() =>
  import("react-icons/si").then((mod) => mod.SiFirebase)
);

const Googlemaps = dynamic(() =>
  import("react-icons/si").then((mod) => mod.SiGooglemaps)
);

const Styledcomponents = dynamic(() =>
  import("react-icons/si").then((mod) => mod.SiStyledcomponents)
);

const GraphQL = dynamic(() =>
  import("react-icons/si").then((mod) => mod.SiGraphql)
);

const TailwindCSS = dynamic(() =>
  import("react-icons/si").then((mod) => mod.SiTailwindcss)
);

const NestJS = dynamic(() =>
  import("react-icons/si").then((mod) => mod.SiNestjs)
);
const MapLibre = dynamic(() =>
  import("react-icons/si").then((mod) => mod.SiGooglemaps)
);

interface Props {
  name: string;
  size: number;
  title: string;
}
const importIcon: React.FC<Props> = (props) => {
  const { name } = props;
  switch (name as any) {
    case "CSS3": {
      return <CSS3 {...props} />;
    }
    case "Express": {
      return <Express {...props} />;
    }
    case "Git": {
      return <Git {...props} />;
    }
    case "Node": {
      return <Node {...props} />;
    }
    case "PostgreSQL": {
      return <PostgreSQL {...props} />;
    }
    case "HTML5": {
      return <HTML5 {...props} />;
    }
    case "Javascript": {
      return <Javascript {...props} />;
    }
    case "React": {
      return <React {...props} />;
    }
    case "ReactNavigation": {
      return <ReactNavigation {...props} />;
    }
    case "ReactNative": {
      return <React {...props} />;
    }
    case "Redux": {
      return <Redux {...props} />;
    }
    case "Sequelize": {
      return <Sequelize {...props} />;
    }
    case "StyledComponents": {
      return <StyledComponents {...props} />;
    }
    case "MongoDB": {
      return <MongoDB {...props} />;
    }
    case "TypeScript": {
      return <Typescript {...props} />;
    }
    case "Next": {
      return <Nextdotjs {...props} />;
    }
    case "Firebase": {
      return <Firebase {...props} />;
    }
    case "GoogleMaps": {
      return <Googlemaps {...props} />;
    }
    case "StyledComponents": {
      return <Styledcomponents {...props} />;
    }
    case "GraphQL": {
      return <GraphQL {...props} />;
    }
    case "TailwindCSS": {
      return <TailwindCSS {...props} />;
    }
    case "NestJS": {
      return <NestJS {...props} />;
    }
    case "Auth0": {
      return <Auth0 {...props} />;
    }
    case "MapLibre": {
      return <MapLibre {...props} />;
    }
  }

  return null; // default value
};

export default importIcon;
