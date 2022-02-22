import React from "react";
import { Form, FormRow } from "./style";
import { Button } from "../../Button/style";

const ContactForm = () => {
  return (
    <>
      {/* <Form
        name="contact"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
      >
        <input name="bot-field" className="hidden" />
        <FormRow>
          <label htmlFor="name">
            Name
            <input type="text" id="name" placeholder="Name" required />
          </label>
        </FormRow>
        <FormRow>
          <label htmlFor="email">
            Email address
            <input
              type="email"
              id="email"
              placeholder="Email address"
              required
            />
          </label>
        </FormRow>
        <FormRow>
          <label htmlFor="message">
            Message
            <textarea id="message" required></textarea>
          </label>
        </FormRow>
        <Button>Submit</Button>
      </Form> */}
      <iframe
        src="https://forms.nathanz.dev/nathanz/contact?alignLeft=1&hideTitle=1&transparentBackground=1&embed=1"
        width="100%"
        height="550"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
        title="Contact
"
      ></iframe>
    </>
  );
};

export default ContactForm;
