// src/Components/Profile/Profile.js
import React from 'react';
import { useAuthContext } from '../Context/AuthContext';
import './Profile.css';

const Profile = () => {
  const { user } = useAuthContext();

  return (
    <div className="profile-container">
      <h1>Profile</h1>
      {user ? <p>Welcome, {user.email}</p> : <p>Please log in</p>}
    </div>
  );
};

export default Profile;
