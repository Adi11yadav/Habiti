// src/components/MoreHabitsPage.js
import React from 'react';
import './MoreHabitsPage.css';

export default function MoreHabitsPage({ habits, onBack }) {
  return (
    <div className="more-habits-page">
      <button onClick={onBack}>← Back to Dashboard</button>
      <h2>📋 All Habits</h2>
      <ul>
        {habits.map(habit => (
          <li key={habit.id}>
            <strong>{habit.name}</strong> {habit.completed ? "✅" : "❌"}
            {habit.proof && <div>Proof: {typeof habit.proof === 'string' ? habit.proof : "📎 File Uploaded"}</div>}
          </li>
        ))}
      </ul>
    </div>
  );
}
