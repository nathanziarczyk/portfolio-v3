import { lighten, transparentize } from "polished";
import styled from "styled-components";
import { variables } from "../../styles/variables";

export const Button = styled.button`
  border: none;
  z-index: 1;
  font-family: ${variables.baseFont};

  padding: 0.65rem 1.75rem;
  font-size: 1rem;
  min-width: 8rem;
  font-weight: 500;
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  cursor: pointer;
  color: ${({ theme, _type = "primary" }) =>
    _type === "secondary" ? theme.primary : theme.button_color};
  border: 2.5px solid ${({ theme }) => theme.accent};
  background-color: ${({ theme }) => theme.accent};
  background-color: ${({ _type = "primary" }) =>
    _type === "secondary" && "unset"};
  position: relative;
  transition: color 0.3s ease-in-out, background-color 0.3s ease;
  a {
    transition: color 0.3s ease-in-out;
    color: ${({ theme, _type }) =>
      _type === "secondary" ? theme.primary : theme.button_color};

    &::before {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }
  }

  &:hover {
    ${({ _type = "primary", theme }) => {
      return _type === "primary"
        ? `
        background-color: unset;
        color: ${theme.primary};
        a{
          color: ${theme.primary};
        }
      `
        : `
        background-color: ${lighten(0.1, theme.primary)};
        color: ${theme.bg};
        a{
          color: ${theme.bg};
        }`;
    }}
  }
`;
