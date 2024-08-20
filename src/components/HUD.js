import React from 'react';

const HUD = ({ score, lives, level, shieldTimer }) => {
  return (
    <div className="hud">
      <p>Score: {score}</p>
      <p>Lives: {lives}</p>
      <p>Level: {level}</p>
      {shieldTimer && (
        <div className="powerup">
          <p>Shield active for: {shieldTimer} seconds</p>
        </div>
      )}
    </div>
  );
};

export default HUD;
