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
  color: ${({ theme }) => theme.text};
  border: 2px solid ${({ theme }) => theme.accent};
  background-color: ${({ _type, theme }) =>
    _type === "primary" ? theme.accent : "unset"};
  position: relative;
`;
