import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;

    try {
      // Check if the email exists
      const checkEmailResponse = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCSKfkH8qKA01VSPg6TCAfi9fKEQvjQOs8`, {
        method: 'POST',
        body: JSON.stringify({ email, password, returnSecureToken: true }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!checkEmailResponse.ok) {
        const errorData = await checkEmailResponse.json();
        if (errorData.error.message === 'EMAIL_NOT_FOUND') {
          // Navigate to Signup page with query param
          navigate(`/signup?email=${encodeURIComponent(email)}`);
        } else {
          setError(errorData.error.message);
        }
        return;
      }

      // Assuming login is successful (implement actual login logic here)
      navigate('/store');
    } catch (error) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input type="email" name="email" placeholder="Email" required />
        <input type="password" name="password" placeholder="Password" required />
        <button type="submit">Login</button>
        {error && <p className="error">{error}</p>}
      </form>
      <p>Don't have an account? <a href="/signup">Signup</a></p>
    </div>
  );
};

export default Login;
