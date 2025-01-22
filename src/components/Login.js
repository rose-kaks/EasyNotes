// src/components/Login.js
import React, { useState } from 'react';
import './Login.css';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');

  const handleLogin = () => {
    if (username.trim()) {
      localStorage.setItem('username', username);
      onLogin(username);
    } else {
      alert('Please enter your username!');
    }
  };

  return (
    <div className="login-container">
      <h2>Welcome! Please Login</h2>
      <input
        type="text"
        placeholder="Enter your name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
