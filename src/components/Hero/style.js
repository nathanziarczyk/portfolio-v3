import styled from "styled-components";
import { colors } from "../../styles/variables";
export const HeroWrapper = styled.div`
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
    color: ${colors.text_dark};
  }
`;
