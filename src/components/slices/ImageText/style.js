import { transparentize } from "polished";
import styled from "styled-components";
import { colors, variables } from "../../../styles/variables";
import Wrapper from "../../Wrapper";

export const ImageTextWrapper = styled(Wrapper)`
  .image-wrapper {
    height: 100%;
    display: flex;
    align-items: center;
  }
`;

export const Content = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: ${({ imageAlignment }) =>
    imageAlignment === "bottom" ? "4rem" : 0};

  .links {
    margin-top: 1rem;
  }
`;
export const Image = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  img {
    filter: drop-shadow(
      0px -7px 12px ${({ theme }) => (theme.secondary === "#252834" ? transparentize(0.95, theme.secondary) : theme.secondary)}
    );
  }

  @media screen and (max-width: 992px) {
    width: 60%;
    margin: 2rem auto 0;
  }
  @media screen and (max-width: 768px) {
    width: 80%;
  }
  @media screen and (max-width: 576px) {
    width: 100%;
  }
`;
