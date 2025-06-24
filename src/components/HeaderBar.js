// src/components/HeaderBar.js
import React, { useState } from 'react';
import './HeaderBar.css';

function HeaderBar({ onOpenModal }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header-bar">
      <h1 className="app-title">
        <img src="/icons/icon.png" alt="logo" className="logo" />
        habiti
      </h1>

      <div className="star-indicator">⭐</div>

      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      {menuOpen && (
        <div className="dropdown-menu">
          <button onClick={() => onOpenModal('login')}>Login</button>
          <button onClick={() => onOpenModal('videos')}>Video Gallery</button>
          <button onClick={() => onOpenModal('settings')}>Settings</button>
          <button onClick={() => onOpenModal('about')}>About Us</button>
          <button onClick={() => onOpenModal('logout')}>Logout</button>
          <button onClick={() => onOpenModal('reminder')}>⏰</button>
        </div>
      )}
    </header>
  );
}

export default HeaderBar;
