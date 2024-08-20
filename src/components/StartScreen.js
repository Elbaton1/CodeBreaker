import React from 'react';

const StartScreen = ({ onStart }) => {
  return (
    <div className="start-screen" style={startScreenStyles.container}>
      <h1 style={startScreenStyles.title}>Codebreaker Blitz</h1>
      <p style={startScreenStyles.tagline}>Sharpen your coding skills while battling waves of enemies!</p>
      
      <p style={startScreenStyles.instructionsTitle}>How to Play:</p>
      <ul style={startScreenStyles.instructionsList}>
        <li><strong>Movement:</strong> Use the WASD keys to move your ship around the screen.</li>
        <li><strong>Shooting:</strong> Aim with your mouse and click to shoot bullets at enemies.</li>
        <li><strong>Power-Ups:</strong> Collect power-ups to increase your firepower and survivability.</li>
        <li><strong>Survival:</strong> Survive waves of increasingly difficult enemies. Avoid collisions and manage your resources wisely.</li>
        <li><strong>Answer Coding Questions:</strong> After every few waves, answer JavaScript coding questions correctly to level up and progress in the game.</li>
        <li><strong>Boost Your Score:</strong> Correct answers boost your score. Keep leveling up and improving your skills!</li>
      </ul>

      <p style={startScreenStyles.additionalInfo}>Codebreaker Blitz is not just a game — it's a fun and interactive way to practice and learn JavaScript. Get ready to code your way to victory!</p>
      
      <button onClick={onStart} style={startScreenStyles.startButton}>
        Play Game
      </button>
    </div>
  );
};

const startScreenStyles = {
  container: {
    textAlign: 'center',
    padding: '60px 20px',
    background: 'linear-gradient(145deg, #1a1a1d, #121212)',
    color: '#00ffcc',
    borderRadius: '15px',
    boxShadow: '0 10px 30px rgba(0, 255, 204, 0.3)',
    maxWidth: '1200px',
    margin: 'auto',
  },
  title: {
    fontSize: '3rem',
    color: '#00ffcc',
    textShadow: '0 0 20px rgba(0, 255, 204, 0.8)',
    marginBottom: '20px',
  },
  tagline: {
    fontSize: '1.8rem',
    marginBottom: '40px',
    color: '#f0f0f0',
  },
  instructionsTitle: {
    fontSize: '1.5rem',
    marginBottom: '20px',
    color: '#f0f0f0',
  },
  instructionsList: {
    listStyleType: 'none',
    padding: 0,
    fontSize: '1.2rem',
    color: '#ffffff',
    marginBottom: '40px',
    lineHeight: '1.8',
  },
  additionalInfo: {
    fontSize: '1.2rem',
    marginTop: '40px',
    color: '#f0f0f0',
    padding: '0 30px',
    lineHeight: '1.6',
  },
  startButton: {
    padding: '15px 40px',
    fontSize: '1.5rem',
    backgroundColor: '#00ffcc',
    color: '#111',
    border: 'none',
    borderRadius: '12px',
    cursor: 'pointer',
    transition: 'transform 0.3s ease, background-color 0.3s ease',
    boxShadow: '0 0 30px rgba(0, 255, 204, 0.7)',
  },


  
};



export default StartScreen;
