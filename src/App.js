import React, { useState } from 'react';
import PhaserGame from './components/PhaserGame';
import StartScreen from './components/StartScreen';
import PuzzleModal from './components/PuzzleModal';

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [showPuzzle, setShowPuzzle] = useState(false);

  const startGame = () => setGameStarted(true);

  const handleSolvePuzzle = () => {
    setShowPuzzle(false);
  };

  return (
    <div className="App">
      {!gameStarted && !showPuzzle && <StartScreen onStart={startGame} />}
      {gameStarted && !showPuzzle && <PhaserGame />}
      {showPuzzle && <PuzzleModal onSolve={handleSolvePuzzle} />}
    </div>
  );
}

export default App;
