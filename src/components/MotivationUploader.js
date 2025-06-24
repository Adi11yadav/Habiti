import React, { useState } from 'react';

export default function MotivationUploader() {
  const [videoUrl, setVideoUrl] = useState('');

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setVideoUrl(url);
    }
  };

  return (
    <div className="motivation-uploader">
      <label>Upload Motivation Video:</label>
      <input type="file" accept="video/*" onChange={handleUpload} />
      {videoUrl && (
        <video width="100%" height="200" controls>
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
}
