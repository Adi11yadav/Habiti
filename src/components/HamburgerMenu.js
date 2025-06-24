// src/components/HamburgerMenu.js
import React from 'react';
import './HamburgerMenu.css';

export default function HamburgerMenu({ onSelectOption }) {
  return (
    <div className="dropdown-menu">
      <div onClick={() => onSelectOption('signin')}>Sign In</div>
      <div onClick={() => onSelectOption('login')}>Login</div>
      <div onClick={() => onSelectOption('more')}>More</div>
      <div onClick={() => onSelectOption('video')}>Video</div>
      <div onClick={() => onSelectOption('settings')}>Settings</div>
      <div onClick={() => onSelectOption('about')}>About Us</div>
      <div onClick={() => onSelectOption('logout')}>Logout</div>
    </div>
  );
}
