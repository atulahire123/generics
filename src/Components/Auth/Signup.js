import React, { useState } from 'react';
import './Signup.css';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [feedback, setFeedback] = useState('');

 // const apiKey = 'AIzaSyCSKfkH8qKA01VSPg6TCAfi9fKEQvjQOs8';

  const signupHandler = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setFeedback('');

    try {
      // Check if the email exists
      const checkEmailResponse = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCSKfkH8qKA01VSPg6TCAfi9fKEQvjQOs8`, {
        method: 'POST',
        body: JSON.stringify({ email, password: 'dummy_password', returnSecureToken: true }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const checkEmailData = await checkEmailResponse.json();

      if (checkEmailResponse.ok) {
        setFeedback('Login existing account');
      } else {
        if (checkEmailData.error.message === 'EMAIL_NOT_FOUND') {
          // Proceed with sign-up if email does not exist
          const signupResponse = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCSKfkH8qKA01VSPg6TCAfi9fKEQvjQOs8`, {
            method: 'POST',
            body: JSON.stringify({ email, password, returnSecureToken: true }),
            headers: {
              'Content-Type': 'application/json',
            },
          });

          const signupData = await signupResponse.json();

          if (!signupResponse.ok) {
            setFeedback(signupData.error.message);
          } else {
            setFeedback('Account created successfully');
          }
        } else {
          setFeedback(checkEmailData.error.message);
        }
      }
    } catch (error) {
      setFeedback('An error occurred. Please try again.');
    }

    setIsLoading(false);
  };

  return (
    <div className="signup-container">
      <form onSubmit={signupHandler}>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </div>
        <div className="form-actions">
          <button type="submit">Sign Up</button>
        </div>
      </form>
      {isLoading && <p className="loader-message">Sending Request...</p>}
      {!isLoading && feedback && <p className="feedback-message">{feedback}</p>}
    </div>
  );
};

export default Signup;
