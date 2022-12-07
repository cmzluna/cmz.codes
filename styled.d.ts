import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      links: string;
      background: { primary: string; secondary: string; hover: string };
      text: string;
    };
    icons: {
      primary: string;
      secondary: string;
    };
    headerHeight: string;
  }
}
