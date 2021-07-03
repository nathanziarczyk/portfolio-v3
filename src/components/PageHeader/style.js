import styled from "styled-components";
import { Wrapper } from "../../styles/base";

export const PageHeaderWrapper = styled(Wrapper)`
  ${({ bg }) => {
    if (bg === "with_bg") {
      return `padding: 1rem 0;`;
    } else {
      return `margin: 1rem 0;`;
    }
  }}
`;

export const Title = styled.h1`
  text-align: center;
`;

export const Body = styled.div``;
