// src/components/WorkRoutine.js
import React, { useState } from 'react';
import './WorkRoutine.css';

const routines = [
  { name: "Early Wake Up", time: "06:00" },
  { name: "Morning Walk", time: "06:30" },
  { name: "Breakfast", time: "08:00" },
  { name: "Workout", time: "09:00" },
  { name: "Study/Work", time: "10:00" },
  { name: "Sleep", time: "22:00" }
];

export default function WorkRoutine({ onEarnPoints, onLosePoints }) {
  const [status, setStatus] = useState({});

  const handleClick = (routine) => {
    const now = new Date();
    const nowTime = now.getHours().toString().padStart(2, '0') + ":" +
                    now.getMinutes().toString().padStart(2, '0');
    const isOnTime = nowTime <= routine.time;

    setStatus(prev => ({
      ...prev,
      [routine.name]: isOnTime ? 'done' : 'missed'
    }));

    isOnTime ? onEarnPoints() : onLosePoints();
  };

  return (
    <div className="routine-container">
      <h3>📆 Daily Routine</h3>
      <div className="routine-grid">
        {routines.map(routine => (
          <div
            key={routine.name}
            className={`routine-card ${status[routine.name]}`}
            onClick={() => handleClick(routine)}
          >
            <span>{routine.name}</span>
            <small>⏰ {routine.time}</small>
            <div className="status">
              {status[routine.name] === 'done' && '✅'}
              {status[routine.name] === 'missed' && '❌'}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
