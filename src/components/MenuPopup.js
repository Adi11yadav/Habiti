import React from 'react';
import './MenuPopup.css';

export default function MenuPopup({ onSelect, onClose }) {
  return (
    <div className="menu-popup">
      <ul>
        <li onClick={() => onSelect('videos')}>📺 Videos</li>
        <li onClick={() => onSelect('settings')}>⚙️ Settings</li>
        <li onClick={() => onSelect('about')}>❓ About</li>
        <li onClick={() => onSelect('logout')}>🚪 Logout</li>
      </ul>
      <button className="close-menu" onClick={onClose}>×</button>
    </div>
  );
}
