import styled from "styled-components";

export const Button = styled.button`
  border: none;
  z-index: 1;

  padding: 0.75rem 1.75rem;
  font-size: 1rem;
  min-width: 8rem;
  font-weight: 600;
  letter-spacing: 1px;
  border-radius: 1.5rem;
  cursor: pointer;
  color: ${({ theme, _type }) =>
    _type === "secondary" ? theme.primary : theme.button_color};
  border: 2px solid ${({ theme }) => theme.accent};
  background-color: ${({ theme }) => theme.accent};
  background-color: ${({ _type }) => _type === "secondary" && "unset"};
  position: relative;

  a {
    color: ${({ theme, _type }) =>
      _type === "secondary" ? theme.primary : theme.button_color};
  }
`;
