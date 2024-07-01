import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';
import './Login.css';

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault();
    // Add logic for actual authentication here
    // Assuming login is successful
    login();
    navigate('/store');
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
        {error && <p className="error">{error}</p>}
      </form>
      <p>Don't have an account? <a href="/signup">Signup</a></p>
    </div>
  );
};

export default Login;
