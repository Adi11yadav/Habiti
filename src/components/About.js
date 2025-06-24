// src/components/About.js
import React from 'react';
import './About.css';

function About({ onClose }) {
  return (
    <div className="about-modal-backdrop">
      <div className="about-modal">
        <h2>About Habiti</h2>
        <p>
          Welcome to <strong>Habiti</strong> — your personal habit tracker to improve your life,
          stay consistent, and unlock achievements.
        </p>
        <p>
          🌟 Track daily habits like fitness, reading, or meditation<br />
          ✅ Earn levels — Bronze, Silver, Gold, up to Conqueror<br />
          📹 Upload short proof videos for verification<br />
          🧠 Play brain games and earn IQ badges<br />
          📊 View progress graphs and improve daily
        </p>
        <p>
          Habiti is built as a PWA — you can install and use it offline too!
        </p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default About;
