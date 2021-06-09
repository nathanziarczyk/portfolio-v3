import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  overflow: visible;
  padding: 6rem 0;
  ${({ bg, theme }) => {
    if (bg === "with_bg") {
      return `background-color: ${theme.primary}`;
    }
  }};

  #tsparticles {
    position: absolute;
    top: -10rem;
    z-index: -1;
    right: 0;
    bottom: 0;
    left: 0;
  }
`;
