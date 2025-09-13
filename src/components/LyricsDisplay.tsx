import React from 'react';
import './LyricsDisplay.css';

interface Props {
  lyrics: string[];
  currentLine: number;
}

const LyricsDisplay: React.FC<Props> = ({ lyrics, currentLine }) => {
  return (
    <div className="lyrics-display">
      {lyrics.map((line, index) => (
        <div
          key={index}
          className={`lyrics-line ${index === currentLine ? 'active' : ''}`}
        >
          {line}
        </div>
      ))}
    </div>
  );
};

export default LyricsDisplay;