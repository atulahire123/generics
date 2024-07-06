import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showSignup, setShowSignup] = useState(false);
  const [signupEmail, setSignupEmail] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setShowSignup(false); // Reset signup prompt

    try {
      const response = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCSKfkH8qKA01VSPg6TCAfi9fKEQvjQOs8`,
        {
          method: 'POST',
          body: JSON.stringify({ email, password, returnSecureToken: true }),
          headers: { 'Content-Type': 'application/json' },
        }
      );

      const data = await response.json();
      if (!response.ok) {
        if (data.error.message === 'EMAIL_NOT_FOUND' || data.error.message === 'INVALID_PASSWORD') {
          setSignupEmail(email); // Set email for signup
          setShowSignup(true); // Show signup prompt
          throw new Error('Email or password not found. Would you like to create an account?');
        } else {
          throw new Error(data.error.message || 'Could not authenticate you.');
        }
      }

      login(data.idToken); // Call login with the token
      navigate('/store'); // Redirect to store after login
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin}>
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
        {error && <p className="error-message">{error}</p>}
        <div className="form-actions">
          <button type="submit">Login</button>
        </div>
      </form>
      <p>
        Don't have an account? <a href="/signup">Signup</a>
      </p>

      {showSignup && (
        <div className="signup-prompt">
          <p>The email {signupEmail} is not registered. Would you like to create an account?</p>
          <button onClick={() => navigate(`/signup?email=${encodeURIComponent(signupEmail)}`)}>
            Create Account
          </button>
        </div>
      )}
    </div>
  );
};

export default Login;
