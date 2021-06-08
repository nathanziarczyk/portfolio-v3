import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 6rem 0;
  ${({ bg, theme }) => {
    if (bg === "with_bg") {
      return `background-color: ${theme.primary}`;
    }
  }};
`;
