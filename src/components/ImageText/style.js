import styled from "styled-components";
import { colors } from "../../styles/variables";

export const ImageTextWrapper = styled.div`
  background-color: ${colors.primary};
`;

export const Content = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 6rem;
`;
export const Image = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: ${colors.primary};
    opacity: 0.15;
  }
`;
