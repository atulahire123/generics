// ContactUs.js
import React, { useRef, useState } from 'react';
import './ContactUs.css';

const ContactUs = () => {
  const nameRef = useRef('');
  const emailRef = useRef('');
  const phoneRef = useRef('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const submitHandler = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const contactData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
    };

    try {
      const response = await fetch('https://console.firebase.google.com/project/react-ecommerce-1e874/database/react-ecommerce-1e874-default-rtdb/data/~2F/contacts.json', {
        method: 'POST',
        body: JSON.stringify(contactData),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to submit contact data.');
      }

      // Clear form inputs
      nameRef.current.value = '';
      emailRef.current.value = '';
      phoneRef.current.value = '';
    } catch (err) {
      setError(err.message);
    }

    setIsSubmitting(false);
  };

  return (
    <div className="contact-us-container">
      <h1>Contact Us</h1>
      <form onSubmit={submitHandler}>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" ref={nameRef} required />
        </div>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" ref={emailRef} required />
        </div>
        <div className="form-control">
          <label htmlFor="phone">Phone Number</label>
          <input type="tel" id="phone" ref={phoneRef} required />
        </div>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export default ContactUs;
