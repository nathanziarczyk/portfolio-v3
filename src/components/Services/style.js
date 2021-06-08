import { transparentize } from "polished";
import styled from "styled-components";

export const Title = styled.h2`
  text-align: center;
`;

export const ServicesContainer = styled.div``;
export const Service = styled.div`
  padding: 2rem;
  border-radius: 0.5rem;
  background-color: ${({ bg, theme }) =>
    bg === "with_bg"
      ? "rgba(255, 255, 255, .5)"
      : transparentize(0.5, theme.primary)};
  backdrop-filter: blur(5px);
  margin-top: 2rem;

  .header {
    display: flex;
    gap: 1rem;
    align-items: center;
    margin-bottom: 1rem;

    i {
      font-size: 1.25rem;
      color: ${({ theme }) => theme.text};
    }

    h3 {
      margin: 0;
    }
  }
`;
