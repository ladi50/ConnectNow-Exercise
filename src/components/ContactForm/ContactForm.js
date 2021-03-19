import React, { useState } from "react";

import Button from "../Button/Button";
import Input from "../Input/Input";

import "./ContactForm.css";

const ContactForm = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const dataChange = (e) => {
    const { name, value } = e.target;

    setData((prevState) => ({ ...prevState, [name]: value }));
  };

  const submitForm = (e) => {
    e.preventDefault();

    for (const item in data) {
      if (data[item].length === 0) return;
    }
  };

  return (
    <form className="contactForm" onSubmit={submitForm}>
      <h4>Contact Form</h4>

      <div className="contactForm__inputs">
        <Input
          type="text"
          name="name"
          value={data.name}
          onChange={dataChange}
          label={
            <>
              <span>Name</span> <span style={{ color: "#5692e8" }}>*</span>
            </>
          }
        />

        <Input
          type="email"
          name="email"
          value={data.email}
          onChange={dataChange}
          label={
            <>
              <span>Email</span> <span style={{ color: "#5692e8" }}>*</span>
            </>
          }
        />
      </div>

      <div className="contactForm__texrArea">
        <label htmlFor="message">
          Message <span style={{ color: "#5692e8" }}>*</span>
        </label>
        <textarea name="message" id="message" cols="30" rows="5" />
      </div>

      <Button />
    </form>
  );
};

export default ContactForm;
