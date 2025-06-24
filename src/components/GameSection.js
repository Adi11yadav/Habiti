import React from 'react';
import './GameSection.css';

export default function GameSection() {
  return (
    <div className="game-section">
      <h3>🧠 Brain Games</h3>
      <ul>
        <li><a href="https://www.memorygames.online/" target="_blank">Memory Game</a></li>
        <li><a href="https://www.mathplayground.com/" target="_blank">Math Challenges</a></li>
        <li><a href="https://www.quizlet.com/" target="_blank">Quick Quiz</a></li>
      </ul>
    </div>
  );
}
