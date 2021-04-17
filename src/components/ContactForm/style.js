import styled from "styled-components";
import { colors } from "../../styles/variables";

export const FormWrapper = styled.section`
  h2 {
    text-align: center;
  }
`;

export const Form = styled.form`
  label {
    color: ${colors.text};
    font-weight: 600;
    input,
    textarea {
      display: block;
      min-width: 100%;
      max-width: 100%;
      border: none;
      background-color: ${colors.primary};
      padding: 0.75rem 1.25rem;
      outline-color: ${colors.accent};
      color: ${colors.text};
      font-size: 1rem;
      margin-top: 0.5rem !important;
    }

    textarea {
      min-height: 100px;
    }
  }

  button[type="submit"] {
    border: none;
    background-color: ${colors.accent};
    color: ${colors.text};
    font-weight: 600;
    padding: 0.6rem 1.5rem;
    font-size: 1.05rem;
    cursor: pointer;
    margin: 0 auto;
    display: block;
    margin-top: 1.5rem;
    border-radius: 2px;
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
`;
