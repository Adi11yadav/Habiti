// src/components/ProfileMenu.js
import React, { useState } from 'react';
import './ProfileMenu.css';

function getLevel(points) {
  if (points >= 100) return 'Conqueror 👑';
  if (points >= 70) return 'Ace 🔥';
  if (points >= 50) return 'Crown 💎';
  if (points >= 40) return 'Diamond 💠';
  if (points >= 30) return 'Platinum ⭐';
  if (points >= 20) return 'Gold 🥇';
  if (points >= 10) return 'Silver 🥈';
  return 'Bronze 🥉';
}

function ProfileMenu({ points }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="profile-menu">
      <div className="profile-circle" onClick={() => setOpen(!open)}>
        <img src="/icons/profile.png" alt="Profile" />
      </div>
      <div className="level-star">{getLevel(points)}</div>
      {open && (
        <div className="profile-dropdown">
          <p><strong>User:</strong> John Doe</p>
          <p><strong>Level:</strong> {getLevel(points)}</p>
          <p><strong>Points:</strong> {points}</p>
          <button onClick={() => alert("Logged out!")}>Logout</button>
        </div>
      )}
    </div>
  );
}

export default ProfileMenu;
