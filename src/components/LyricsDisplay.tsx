import React, { useEffect, useRef } from 'react';
import './LyricsDisplay.css';

interface LyricsDisplayProps {
  lyrics: string[];
  currentLine: number;
}

const LyricsDisplay: React.FC<LyricsDisplayProps> = ({ lyrics, currentLine }) => {
  const activeLineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (activeLineRef.current) {
      activeLineRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  }, [currentLine]);

  return (
    <div className="lyrics-display">
      {lyrics.map((line, index) => (
        <div
          key={index}
          ref={index === currentLine ? activeLineRef : null}
          className={`lyrics-line ${index === currentLine ? 'active' : ''}`}
        >
          {line}
        </div>
      ))}
    </div>
  );
};

export default LyricsDisplay;