import React from 'react';
import './MoreMenu.css';

export default function MoreMenu({ onSelect, onClose }) {
  return (
    <div className="more-menu" onClick={onClose}>
      <ul onClick={(e) => e.stopPropagation()}>
        <li onClick={() => onSelect('videos')}>🎥 Video Gallery</li>
        <li onClick={() => onSelect('settings')}>⚙️ Settings</li>
        <li onClick={() => onSelect('about')}>ℹ️ About</li>
        <li onClick={() => onSelect('login')}>🔐 Login</li>
      </ul>
    </div>
  );
}
