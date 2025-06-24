import React, { useState } from 'react';
import './Modal.css'; // optional: add basic styles

function LoginModal({ onClose, onLogin }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleLogin = () => {
    if (name.trim() && email.trim()) {
      const user = {
        name,
        email,
        level: 'Bronze',
        photo: '', // placeholder for future profile image
      };
      localStorage.setItem('habitUser', JSON.stringify(user));
      onLogin(user);
      onClose();
    } else {
      alert('Please fill in both fields.');
    }
  };

  return (
    <div className="modal-backdrop">
      <div className="modal-box">
        <button className="close-btn" onClick={onClose}>✖</button>
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="submit-btn" onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

export default LoginModal;
