import styled from "styled-components";
import { colors } from "../../styles/variables";

export const HeaderEl = styled.header`
  padding: 1rem 0;
  h1 {
    margin: 0;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      right: 0;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 0.4rem;
      background-color: ${colors.orange};
      z-index: -1;
    }
  }
`;
