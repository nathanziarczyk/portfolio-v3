import { motion } from "framer-motion";
import { transparentize } from "polished";
import styled from "styled-components";
import Wrapper from "../../Wrapper";
import { variables } from "../../../styles/variables";

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
      -webkit-appearance: none;
      display: block;
      min-width: 100%;
      max-width: 100%;
      border: none;
      font-family: "Raleway";
      font-weight: 400;
      background-color: ${({ theme, bg }) => {
        return bg === "with_bg" ? "#fff" : theme.primary;
      }};
      padding: 0.75rem 1.25rem;
      color: ${({ theme }) => theme.text};
      font-size: 1rem;
      margin-top: 0.5rem !important;
      border-radius: 0.5rem;
      border: 1px solid ${({ theme }) => transparentize(0.75, theme.text)};
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
