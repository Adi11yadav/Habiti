import React, { useState } from 'react';
import './ReminderModal.css';

function ReminderModal({ onClose, onSetReminder }) {
  const [time, setTime] = useState('');

  const handleSet = () => {
    if (!time) return;
    onSetReminder(time);
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h3>Set Habit Reminder</h3>
        <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
        <button onClick={handleSet}>Set Reminder</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
}

export default ReminderModal;
