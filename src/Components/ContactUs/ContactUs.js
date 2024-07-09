// src/Components/ContactUs/ContactUs.js
import React, { useState } from 'react';
import './ContactUs.css';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [feedback, setFeedback] = useState('');

  const submitHandler = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setFeedback('');

    const contactData = { name, email, phone };

    try {
      const response = await fetch('https://react-ecommerce-1e874-default-rtdb.firebaseio.com/contacts.json', {
        method: 'POST',
        body: JSON.stringify(contactData),
        headers: { 'Content-Type': 'application/json' },
      });

      if (!response.ok) {
        throw new Error('Failed to submit contact data.');
      }

      setName('');
      setEmail('');
      setPhone('');
      setFeedback('Contact information submitted successfully.');
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
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div className="form-actions">
          <button type="submit" disabled={isSubmitting}>Submit</button>
        </div>
      </form>
      {isSubmitting && <p className="loader-message">Sending request...</p>}
      {error && <p className="error-message">{error}</p>}
      {feedback && <p className="feedback-message">{feedback}</p>}
    </div>
  );
};

export default ContactUs;
