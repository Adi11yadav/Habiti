
import React, { useState, useEffect } from 'react';
import './QuizEngine.css';

const sampleQuestions = [
  {
    question: "What is the best time to do meditation?",
    options: ["Morning", "Evening", "Midnight", "Before Meal"],
    answer: "Morning"
  },
  {
    question: "How many hours of sleep is ideal for adults?",
    options: ["5", "6-8", "10", "3"],
    answer: "6-8"
  },
  {
    question: "Which vitamin is most beneficial from sunlight?",
    options: ["A", "B12", "D", "C"],
    answer: "D"
  },
  {
    question: "What is essential for strong bones?",
    options: ["Iron", "Calcium", "Magnesium", "Zinc"],
    answer: "Calcium"
  },
  {
    question: "Which of the following improves mental focus?",
    options: ["Green Tea", "Coffee", "Water", "All of the above"],
    answer: "All of the above"
  }
];

export default function QuizEngine({ onEarnPoints }) {
  const [question, setQuestion] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [feedback, setFeedback] = useState('');

  useEffect(() => {
    const today = new Date().toISOString().slice(0, 10);
    const stored = JSON.parse(localStorage.getItem('quizAnswered') || '{}');

    if (stored[today]) {
      setQuestion(stored[today].question);
      setAnswered(true);
      setFeedback("✅ Already answered today's quiz.");
    } else {
      const index = Math.floor(Math.random() * sampleQuestions.length);
      const picked = sampleQuestions[index];
      setQuestion(picked);
      stored[today] = { question: picked };
      localStorage.setItem('quizAnswered', JSON.stringify(stored));
    }
  }, []);

  const handleAnswer = (option) => {
    if (answered) return;

    const correct = option === question.answer;
    setFeedback(correct ? '🎉 Correct! You earned 1 point.' : '❌ Incorrect.');
    setAnswered(true);
    if (correct && onEarnPoints) onEarnPoints();
  };

  if (!question) return null;

  return (
    <div className="quiz-engine">
      <h3>🧠 Daily Quiz</h3>
      <p>{question.question}</p>
      <div className="quiz-options">
        {question.options.map((opt, i) => (
          <button key={i} onClick={() => handleAnswer(opt)} disabled={answered}>
            {opt}
          </button>
        ))}
      </div>
      <p className="quiz-feedback">{feedback}</p>
    </div>
  );
}
