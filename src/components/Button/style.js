import styled from "styled-components";

export const Button = styled.button`
  border: none;
  z-index: 1;

  padding: 1rem 1.75rem;
  font-size: 1rem;
  min-width: 8rem;
  font-weight: 600;
  letter-spacing: 1px;
  border-radius: 1.5rem;
  cursor: pointer;
  background: ${({ theme }) => theme.accent};
  color: ${({ theme }) => theme.text};
  position: relative;
`;
