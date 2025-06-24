import React, { useState } from 'react';
import './VideoUploader.css';

export default function VideoUploader() {
  const [videoURL, setVideoURL] = useState(null);

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setVideoURL(url);
      alert('🎥 Motivation video uploaded!');
    }
  };

  return (
    <div className="video-uploader">
      <label htmlFor="videoUpload" className="upload-label">
        Upload Motivation Video:
      </label>
      <input
        type="file"
        id="videoUpload"
        accept="video/*"
        onChange={handleUpload}
      />
      {videoURL && (
        <video width="240" height="140" controls>
          <source src={videoURL} type="video/mp4" />
          Your browser does not support video.
        </video>
      )}
    </div>
  );
}
