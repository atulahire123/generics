
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Replace with your main App component
import { BrowserRouter as Router } from 'react-router-dom'; // Ensure you have BrowserRouter or appropriate Router

// Replace ReactDOM.render with createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <App />
  </Router>
);
