import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      links: string;
      background: string;
      text: string;
    };
    headerHeight: string;
  }
}
