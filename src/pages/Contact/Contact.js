import React from "react";

import ContactForm from "../../components/ContactForm/ContactForm";
import ContactHeader from "../../components/ContactHeader/ContactHeader";

import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <ContactHeader />

      <ContactForm />
    </div>
  );
};

export default Contact;
