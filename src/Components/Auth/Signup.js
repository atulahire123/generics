import React, { useState } from 'react';
import './Signup.css';

const Signup = () => {
  const [error, setError] = useState(null);

  const handleSignup = (e) => {
    e.preventDefault();
    // Add logic for actual signup here
    // Assuming signup is successful
    console.log('User signed up');
  };

  return (
    <div className="signup-container">
      <h2 className="signup-title">Signup</h2>
      <form onSubmit={handleSignup}>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Name" required />
        </div>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Email" required />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Password" required />
        </div>
        <button type="submit" className="signup-button">Signup</button>
        {error && <p className="error-message">{error}</p>}
      </form>
    </div>
  );
};

export default Signup;
