// src/components/ProfileModal.js
import React from 'react';
import './ProfileModal.css';

export default function ProfileModal({ user, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="profile-modal" onClick={(e) => e.stopPropagation()}>
        <h2>👤 User Profile</h2>
        <img
          src={user?.image || '/icons/profile.png'}
          alt="Profile"
          className="profile-image"
        />
        <p><strong>Name:</strong> {user?.name || 'N/A'}</p>
        <p><strong>Email:</strong> {user?.email || 'N/A'}</p>
        <p><strong>Mobile:</strong> {user?.mobile || 'N/A'}</p>
        <p><strong>Level:</strong> {user?.level || 'Bronze'}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
