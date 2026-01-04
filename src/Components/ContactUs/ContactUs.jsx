import React, { useState } from "react";
import styled from "styled-components";

const ContactUs = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can send the form data to your backend or API
    console.log(form);
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <Section>
      <Header>
        <h2 className="text-center font-bold  text-4xl">Contact Us</h2>
        <p>
          Have questions, suggestions, or need guidance? We’re here to help you
          and your pets!
        </p>
      </Header>

      <FormContainer onSubmit={handleSubmit}>
        <InputGroup>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </InputGroup>
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          rows="6"
          required
        ></textarea>
        <button className="btn bg-amber-100 dark:bg-gray-400 hover:bg-amber-200 dark:hover:bg-gray-300" type="submit">Send Message</button>
        {submitted && <p className="success">Thank you! Your message has been sent.</p>}
      </FormContainer>
    </Section>
  );
};
const Section = styled.section`
  padding: 30px 20px;

`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 50px;



  p {
    margin-top: 10px;

    max-width: 600px;
    margin-inline: auto;
  }
`;

const FormContainer = styled.form`
  max-width: 700px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 16px;

  input,
  textarea {
    width: 100%;
    padding: 14px 16px;
    border-radius: 12px;
    border: 1px solid #ccc;
    font-size: 1rem;
    outline: none;
    transition: border 0.3s ease;

    &:focus {
      border-color: #6ecdc3;
    }
  }

  button {

    border: none;
    padding: 14px 20px;
    border-radius: 30px;
    font-size: 1rem;
    cursor: pointer;
    transition: background 0.3s ease;


  }

  .success {
    margin-top: 12px;

    font-weight: 500;
  }
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (min-width: 600px) {
    flex-direction: row;
    gap: 16px;

    input {
      flex: 1;
    }
  }
`;

export default ContactUs;
