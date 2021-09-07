import styled from "styled-components";
import Wrapper from "../../Wrapper";

export const ImageTextWrapper = styled(Wrapper)`
  .image-wrapper {
    height: 100%;
    display: flex;
    align-items: center;
  }

  .image-wrap {
    box-shadow: ${({ type }) => {
      if (type) {
        return "rgba(0, 0, 0, 0.1) 0px 4px 12px";
      }
    }};
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
  border-radius: 1rem;
  overflow: hidden;

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
