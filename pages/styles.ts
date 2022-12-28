import SocialLinks from "components/SocialLinks";
import styled from "styled-components";

const SocialLinksBottom = styled(SocialLinks)`
  z-index: 3;
  display: flex;
  width: 100%;
  justify-content: space-around;
  margin: 3vh auto;
  padding: 5px;
  border-bottom: 1px solid #c69ed1;
  border-radius: 9999px;

  .LinkedIn {
  }

  .Email {
  }

  .GitHub {
  }

  @media (max-width: 870px) {
    justify-content: space-around;
  }
`;

export { SocialLinksBottom };
