import React, { useState } from 'react';
import './HabitInput.css';

export default function HabitInput({ onAddHabit }) {
  const [habit, setHabit] = useState('');

  const handleAdd = () => {
    if (habit.trim()) {
      onAddHabit(habit.trim());
      setHabit('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleAdd();
  };

  return (
    <div className="habit-input-container">
      <input
        type="text"
        value={habit}
        onChange={(e) => setHabit(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Enter a habit..."
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}
