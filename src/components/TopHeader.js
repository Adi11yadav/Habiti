import React from 'react';
import './TopHeader.css';

export default function TopHeader({ userLevel, onProfileClick, onMenuClick }) {
  return (
    <div className="top-header">
      <div className="header-left" onClick={onProfileClick}>
        <img src="/icons/profile.png" alt="Profile" className="profile-icon" />
      </div>

      <div className="header-center">
        <img src="/icons/logo.png" alt="Logo" className="app-logo" />
        <h1 className="app-name">Habiti Tracker</h1>
      </div>

      <div className="header-right">
        <span className="user-level">{userLevel}</span>
        <span className="menu-icon" onClick={onMenuClick}>☰</span>
      </div>
    </div>
  );
}
