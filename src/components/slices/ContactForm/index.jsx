import React from "react";
import { Form, FormRow } from "./style";
import { Button } from "../../Button/style";

const ContactForm = () => {
  return (
    <Form>
      <FormRow>
        <label htmlFor="name">
          Name
          <input type="text" id="name" placeholder="Name" />
        </label>
      </FormRow>
      <FormRow>
        <label htmlFor="email">
          Email address
          <input type="email" id="email" placeholder="Email address" />
        </label>
      </FormRow>
      <FormRow>
        <label htmlFor="message">
          Message
          <textarea id="message"></textarea>
        </label>
      </FormRow>
      <Button>Submit</Button>
    </Form>
  );
};

export default ContactForm;
