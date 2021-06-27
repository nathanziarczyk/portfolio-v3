import styled from "styled-components";
import { colors } from "../../styles/variables";

export const ImageTextWrapper = styled.div`
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    width: 12%;
    height: 3px;
    background-color: ${({ theme }) => theme.accent};
    transform: translateY(-50%) translateX(-50%);
  }
`;

export const Content = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 4rem;

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
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: ${({ theme }) => theme.primary};
    opacity: 0.15;
  }

  @media screen and (max-width: 992px) {
    width: 60%;
    margin: 0 auto;
  }
  @media screen and (max-width: 768px) {
    width: 80%;
    margin: 0 auto;
  }
  @media screen and (max-width: 576px) {
    width: 100%;
    margin: 0 auto;
  }
`;
