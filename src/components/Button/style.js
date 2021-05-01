import styled from "styled-components";

export const Button = styled.button`
  border: none;
  z-index: 1;

  padding: 0.6rem 1.5rem;
  font-size: 0.9rem;
  text-transform: uppercase;
  font-weight: 600;
  border-radius: 2px;
  cursor: pointer;
  background: ${({ theme }) => theme.accent};
  color: ${({ theme }) => theme.button_color};
  position: relative;
`;
