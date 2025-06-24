import React from 'react';
import './Suggestions.css';

export default function Suggestions({ onEarnPoints }) {
  const suggestions = [
    "Drink water",
    "Do yoga",
    "Read a book",
    "Take a walk",
    "Meditate",
    "Stretch for 5 min",
  ];

  return (
    <div className="suggestion-grid">
      {suggestions.map((tip, index) => (
        <div key={index} className="suggestion-card" onClick={onEarnPoints}>
          ✅ {tip}
        </div>
      ))}
    </div>
  );
}
