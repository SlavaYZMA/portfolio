import React, { useState, useRef } from 'react';

function AudioPlayer({ src }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="mt-4">
      <button
        onClick={togglePlay}
        className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
      >
        {isPlaying ? 'Pause' : 'Play'}
      </button>
      <audio ref={audioRef} src={src} />
    </div>
  );
}

export default AudioPlayer;
