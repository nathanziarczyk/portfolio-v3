import { transparentize } from "polished";
import styled from "styled-components";

export const Title = styled.h2`
  text-align: center;
`;

export const ServicesContainer = styled.div``;
export const Service = styled.div`
  padding: 2rem;
  height: 90%;
  border-radius: 0.5rem;
  background-color: ${({ bg, theme }) =>
    bg === "with_bg"
      ? transparentize(0.5, theme.bg)
      : transparentize(0.5, theme.primary)};
  backdrop-filter: blur(5px);
  margin-top: 2rem;
  transition: transform 0.35s ease-in-out;

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

    .content {
      p {
        &:last-of-type {
          margin-bottom: 0;
        }
      }
    }
  }

  &:hover {
    transform: translateY(-0.25rem);
  }
`;
