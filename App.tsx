import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Apple Music-style Lyrics Viewer</h1>
      </header>
      <main>
        <div className="lyrics-container">
          {/* Lyrics will be displayed here */}
        </div>
        <div className="player-controls">
          {/* Music player controls will go here */}
        </div>
      </main>
    </div>
  );
}

export default App;