

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [showSignup, setShowSignup] = useState(false);
  const [signupEmail, setSignupEmail] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=
AIzaSyCSKfkH8qKA01VSPg6TCAfi9fKEQvjQOs8`, {
        method: 'POST',
        body: JSON.stringify({ email, password, returnSecureToken: true }),
        headers: { 'Content-Type': 'application/json' },
      });

      const data = await response.json();
      if (!response.ok) {
        if (data.error.message === 'EMAIL_NOT_FOUND') {
          setSignupEmail(email);
          setShowSignup(true);
        } else {
          setError(data.error.message);
        }
        return;
      }
      navigate('/store');
    } catch (error) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
        <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
        <button type="submit">Login</button>
        {error && <p className="error" aria-live="assertive">{error}</p>}
      </form>
      <p>Don't have an account? <a href="/signup">Signup</a></p>

      {showSignup && (
        <div className="signup-prompt">
          <p>The email {signupEmail} is not registered. Would you like to create an account?</p>
          <button onClick={() => navigate(`/signup?email=${encodeURIComponent(signupEmail)}`)}>Create Account</button>
        </div>
      )}
    </div>
  );
};

export default Login;
