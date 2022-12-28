import Email from "components/Icons/Email";
import GitHub from "components/Icons/GitHub";
import LinkedIn from "components/Icons/LinkedIn";
import React from "react";
import { useTheme } from "styled-components";
import { Wrapper } from "./styles";

const SocialLinks = (props: any) => {
  const { className } = props;
  const theme = useTheme();

  return (
    <Wrapper className={className}>
      <LinkedIn className="LinkedIn" width={35} fill={theme.colors.primary} />
      <Email className="Email" width={35} fill={theme.colors.primary} />
      <GitHub className="GitHub" width={35} fill={theme.colors.primary} />
    </Wrapper>
  );
};

export default SocialLinks;
