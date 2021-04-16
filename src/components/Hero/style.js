import styled from "styled-components";

export const HeroWrapper = styled.div`
  padding-top: 10rem;
  position: relative;
  overflow: hidden;
  margin-bottom: -2.5rem;

  svg {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: auto;
  }
`;
