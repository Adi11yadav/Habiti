// src/components/VideoGallery.js
import React from 'react';
import './VideoGallery.css';

function VideoGallery({ onClose }) {
  const videos = [
    {
      title: '10 Minute Full Body Workout',
      url: 'https://www.youtube.com/embed/ml6cT4AZdqI'
    },
    {
      title: 'Mindful Meditation for Beginners',
      url: 'https://www.youtube.com/embed/inpok4MKVLM'
    },
    {
      title: 'Brain Exercise – Quick Focus Game',
      url: 'https://www.youtube.com/embed/lJ3C9SP8xRE'
    }
  ];}
  export default function VideoGallery({ onClose, videoUrl }) {
  return (
    <div className="modal video-gallery">
      <h2>🎥 Motivation Vault</h2>
      {videoUrl ? (
        <video controls width="100%">
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <p>No video uploaded yet.</p>
      )}
      <button onClick={onClose}>Close</button>
    </div>
  );
}