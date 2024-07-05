import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom'; // Update to useNavigate
import { AuthContext } from '../Context/AuthContext';
import './Login.css';

const Login = () => {
  const navigate = useNavigate(); // Update to useNavigate
  const { login } = useContext(AuthContext);
  const [error, setError] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=
AIzaSyCSKfkH8qKA01VSPg6TCAfi9fKEQvjQOs8`,
        {
          method: 'POST',
          body: JSON.stringify({ email, password, returnSecureToken: true }),
          headers: { 'Content-Type': 'application/json' },
        }
      );

      const data = await response.json();
      if (!response.ok) {
        setError(data.error.message);
        return;
      }

      login(data.idToken);
      navigate('/store', { replace: true }); // Redirect to the store page
    } catch (error) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit">Login</button>
        {error && <p className="error" aria-live="assertive">{error}</p>}
      </form>
      <p>Don't have an account? <a href="/signup">Signup</a></p>
    </div>
  );
};

export default Login;
