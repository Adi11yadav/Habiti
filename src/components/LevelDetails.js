// src/components/LevelDetails.js
import React from 'react';
import './LevelDetails.css';

export default function LevelDetails({ points = 0, onClose }) {
  const levels = [
    { name: 'Bronze', min: 0 },
    { name: 'Silver', min: 50 },
    { name: 'Gold', min: 100 },
    { name: 'Platinum', min: 200 },
    { name: 'Diamond', min: 400 },
    { name: 'Conqueror', min: 700 },
  ];

  const currentLevel = levels.slice().reverse().find(level => points >= level.min);
  const nextLevel = levels.find(level => level.min > points);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="level-modal" onClick={(e) => e.stopPropagation()}>
        <h2>⭐ Level Progress</h2>
        <p><strong>Current Level:</strong> {currentLevel?.name}</p>
        <p><strong>Points:</strong> {points}</p>
        {nextLevel ? (
          <p>
            <strong>Next Level:</strong> {nextLevel.name} <br />
            <small>{nextLevel.min - points} points needed</small>
          </p>
        ) : (
          <p><strong>🎉 You are at the highest level: Conqueror!</strong></p>
        )}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
