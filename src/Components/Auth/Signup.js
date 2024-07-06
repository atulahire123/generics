import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [feedback, setFeedback] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const prefillEmail = params.get('email');
    if (prefillEmail) {
      setEmail(prefillEmail);
    }
  }, [location.search]);

  const signupHandler = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setFeedback('');

    try {
      const response = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCSKfkH8qKA01VSPg6TCAfi9fKEQvjQOs8`,
        {
          method: 'POST',
          body: JSON.stringify({ email, password, returnSecureToken: true }),
          headers: { 'Content-Type': 'application/json' },
        }
      );

      const data = await response.json();
      if (response.ok) {
        setFeedback('Account created successfully. You can now log in.');
        navigate('/login'); // Redirect to login page after successful signup
      } else {
        setFeedback(data.error.message);
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
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-actions">
          <button type="submit" disabled={isLoading}>Sign Up</button>
        </div>
      </form>
      {isLoading && <p className="loader-message">Sending Request...</p>}
      {!isLoading && feedback && <p className="feedback-message">{feedback}</p>}
    </div>
  );
};

export default Signup;
