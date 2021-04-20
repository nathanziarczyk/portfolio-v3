import { darken } from "polished";
import styled from "styled-components";
import { colors } from "../../styles/variables";

export const Button = styled.button`
  border: none;
  padding: 0.6rem 1.5rem;
  font-size: 0.9rem;
  text-transform: uppercase;
  font-weight: 600;
  border-radius: 20px;
  cursor: pointer;
  background: ${colors.accent};
  color: ${colors.text};

  &:hover {
    background-color: ${darken(0.1, colors.accent)};
  }
`;
