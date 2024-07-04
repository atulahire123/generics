// Components/Auth/LogoutButton.js

import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';

const LogoutButton = () => {
  const { logout } = useContext(AuthContext);

  return (
    <button onClick={logout} className="logout-button">
      Logout
    </button>
  );
};

export default LogoutButton;
