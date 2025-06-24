import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

Chart.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function StreakChart({ habits }) {
  const data = {
    labels: habits.map(h => h.name),
    datasets: [
      {
        label: 'Completed Habits',
        data: habits.map(h => h.completed ? 1 : 0),
        backgroundColor: '#4caf50',
        borderRadius: 4
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        callbacks: {
          label: (context) => (context.raw === 1 ? 'Completed' : 'Not completed')
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 1,
        ticks: {
          stepSize: 1,
          callback: value => (value === 1 ? 'Yes' : 'No')
        }
      }
    }
  };

  return (
    <div className="chart-container">
      <h3 style={{ textAlign: 'center' }}>📊 Habit Completion Chart</h3>
      <Bar data={data} options={options} />
    </div>
  );
}
