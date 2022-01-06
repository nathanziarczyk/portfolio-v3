import { motion } from "framer-motion";
import styled from "styled-components";
import { variables } from "../../../styles/variables";

export const Form = styled(motion.form)`
  width: 100%;

  label {
    color: ${({ theme }) => theme.text};
    font-weight: 600;
    width: 100%;

    input,
    textarea {
      -webkit-appearance: none;
      display: block;
      min-width: 100%;
      max-width: 100%;
      border: 1px solid ${({ theme }) => theme.text};
      font-family: "Raleway";
      font-weight: 500;
      background-color: ${({ theme, bg }) => {
        return bg === "with_bg" ? "#fff" : theme.white;
      }};
      padding: 0.5rem 1.25rem;
      color: ${({ theme }) => theme.text};
      font-size: 1rem;
      margin-top: 0.25rem !important;
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
  gap: 1rem;

  &:not(:last-child) {
    margin-bottom: 1rem;
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
