// src/components/Settings.js
import React, { useState, useEffect } from 'react';
import './Settings.css';

function Settings({ onClose }) {
  const [reminders, setReminders] = useState(() => {
    return localStorage.getItem('reminders') === 'true';
  });

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  // Save changes to localStorage
  useEffect(() => {
    localStorage.setItem('reminders', reminders);
    localStorage.setItem('theme', theme);

    document.body.setAttribute('data-theme', theme);
  }, [reminders, theme]);

  return (
    <div className="settings-modal-backdrop">
      <div className="settings-modal">
        <h2>Settings</h2>

        <div className="setting-item">
          <label>
            <input
              type="checkbox"
              checked={reminders}
              onChange={() => setReminders(!reminders)}
            />
            Enable Daily Reminders
          </label>
        </div>

        <div className="setting-item">
          <label>Theme:</label>
          <select value={theme} onChange={(e) => setTheme(e.target.value)}>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>

        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default Settings;
