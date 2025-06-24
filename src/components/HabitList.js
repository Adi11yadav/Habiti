import React from 'react';
import './HabitList.css';

function HabitList({ habits, onToggleComplete, onAddProof }) {
  return (
    <div className="habit-list-container">
      <h2>Your Habits</h2>
      {habits.length === 0 ? (
        <p>No habits added yet.</p>
      ) : (
        <ul className="habit-list">
          {habits.map((habit) => (
            <li key={habit.id} className={habit.completed ? 'completed' : ''}>
              <span>{habit.name}</span>

              <div className="habit-buttons">
                <button onClick={() => onToggleComplete(habit.id)}>✅</button>

                {/* 📥 Video Upload Input */}
                <input
                  type="file"
                  accept="video/*"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) onAddProof(habit.id,e.target.file[0]);
                  }}
                />
              </div>

              {/* ✅ Show Proof Text or Video */}
              {habit.proof && (
                <div className="proof-note">
                  <p>Proof attached:</p>
                  <video width="200" controls src={habit.proof}></video>
                  <button onClick={() => onAddProof(habit.id)}>➕</button>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default HabitList;
