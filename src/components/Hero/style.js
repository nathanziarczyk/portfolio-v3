import styled from "styled-components";
import { Wrapper } from "../../styles/base";

export const HeroWrapper = styled(Wrapper)`
  * {
    text-align: center;
  }

  h1 {
    span {
      display: inline-block;
      white-space: break-spaces;
    }
  }

  p {
    color: ${({ theme }) => theme.text_dark};
  }
`;
