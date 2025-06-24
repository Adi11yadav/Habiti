import React, { useState } from 'react';
import './ReminderClock.css'; // Optional: if you want to extract styles

export default function ReminderClock({ onSetReminder, reminderTime = [] }) {
  const [showPicker, setShowPicker] = useState(false);
  const [time, setTime] = useState('');

  const handleAddTime = () => {
    if (time) {
      onSetReminder(time);
      setTime('');
      setShowPicker(false);
    }
  };

  return (
    <div className="reminder-clock">
      <span
        className="clock-icon"
        title="Set Reminder"
        onClick={() => setShowPicker(!showPicker)}
      >
        ⏰
      </span>

      {showPicker && (
        <div className="time-picker-popup">
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
          <button onClick={handleAddTime}>Add</button>
        </div>
      )}

      <div className="reminder-list">
        {(reminderTime || []).map((time, i) => (
          <div key={i} className="reminder-item">
            ⏰ {time}
          </div>
        ))}
      </div>
    </div>
  );
}
