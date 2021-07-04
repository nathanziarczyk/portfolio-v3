import { motion } from "framer-motion";
import styled from "styled-components";
import { Wrapper } from "../../styles/base";
import { variables } from "../../styles/variables";

export const FormWrapper = styled(Wrapper)`
  h2 {
    text-align: center;
  }
`;

export const Form = styled(motion.form)`
  label {
    color: ${({ theme }) => theme.text};
    font-weight: 600;
    input,
    textarea {
      display: block;
      min-width: 100%;
      max-width: 100%;
      border: none;
      background-color: ${({ theme, bg }) => {
        return bg === "with_bg" ? theme.bg : theme.primary;
      }};
      padding: 0.75rem 1.25rem;
      outline-color: ${({ theme }) => theme.accent};
      color: ${({ theme }) => theme.text};
      font-size: 1rem;
      margin-top: 0.5rem !important;
    }

    textarea {
      min-height: 100px;
    }
  }

  button[type="submit"] {
    margin: 0 auto;
    display: block;
    margin-top: 1.5rem;
  }
`;

export const FormRow = styled.div`
  display: flex;
  justify-content: space-between;
  &:not(:last-child) {
    margin-bottom: 1rem;
  }

  label {
    width: ${({ children }) => (children.length === 2 ? "48%" : "100%")};
  }

  @media screen and (max-width: ${variables.sm}) {
    flex-direction: column;
    margin-bottom: 0 !important;

    label {
      width: 100%;
      margin-bottom: 1rem;
    }
  }
`;
