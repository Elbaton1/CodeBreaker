import React, { useEffect, useState } from 'react';
import Phaser from 'phaser';
import HUD from './HUD';
import PuzzleModal from './PuzzleModal';

// Import images as modules
import playerImage from '../assets/player.png';
import enemyImage from '../assets/Mark.png';
import bulletImage from '../assets/bullet.png';

function PhaserGame() {
  const [gameStarted, setGameStarted] = useState(false);
  const [showPuzzle, setShowPuzzle] = useState(false);
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [lives, setLives] = useState(3);
  const [enemiesDefeated, setEnemiesDefeated] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  useEffect(() => {
    let game;
    if (gameStarted) {
      const config = {
        type: Phaser.AUTO,
        width: 1200,
        height: 800,
        parent: 'game-container',
        physics: {
          default: 'arcade',
          arcade: {
            gravity: { y: 0 },
            debug: false,
          },
        },
        scene: {
          preload: preload,
          create: create,
          update: update,
        },
      };

      game = new Phaser.Game(config);

      function preload() {
        // Loading images using the imported modules
        this.load.image('player', playerImage);
        this.load.image('enemy', enemyImage);
        this.load.image('bullet', bulletImage);
      }

      function create() {
        this.player = this.physics.add.sprite(600, 400, 'player');
        this.player.setScale(0.04);
        this.player.setCollideWorldBounds(true);
        this.player.body.setSize(this.player.width * 0.7, this.player.height * 0.7, true);

        this.bullets = this.physics.add.group({
          classType: Phaser.Physics.Arcade.Image,
          defaultKey: 'bullet',
          maxSize: 20,
        });

        this.enemies = this.physics.add.group();

        this.wasd = this.input.keyboard.addKeys({
          up: Phaser.Input.Keyboard.KeyCodes.W,
          down: Phaser.Input.Keyboard.KeyCodes.S,
          left: Phaser.Input.Keyboard.KeyCodes.A,
          right: Phaser.Input.Keyboard.KeyCodes.D,
        });

        this.time.addEvent({
          delay: 2000,
          callback: () => spawnEnemy(this),
          loop: true,
        });

        this.input.on('pointerdown', (pointer) => shootBullet(this, pointer));

        this.physics.add.collider(this.bullets, this.enemies, (bullet, enemy) => {
          bullet.destroy(); // Destroy bullet on impact to free it up for reuse
          enemy.destroy();
          setScore((prevScore) => prevScore + 10);
          setEnemiesDefeated((prev) => prev + 1);
        });

        this.physics.add.collider(this.player, this.enemies, (player, enemy) => {
          player.setTint(0xff0000);
          enemy.destroy();
          setLives((prevLives) => prevLives - 1);
          this.time.delayedCall(100, () => player.clearTint());
          if (lives <= 0) {
            gameOver(this);
          }
        });
      }

      function update() {
        this.player.setVelocity(0);

        if (this.wasd.left.isDown) {
          this.player.setVelocityX(-200);
        } else if (this.wasd.right.isDown) {
          this.player.setVelocityX(200);
        }

        if (this.wasd.up.isDown) {
          this.player.setVelocityY(-200);
        } else if (this.wasd.down.isDown) {
          this.player.setVelocityY(200);
        }

        this.player.rotation = Phaser.Math.Angle.Between(
          this.player.x,
          this.player.y,
          this.input.activePointer.x,
          this.input.activePointer.y
        );
      }

      function shootBullet(scene, pointer) {
        const bullet = scene.bullets.get(scene.player.x, scene.player.y);
        if (bullet) {
          bullet.setActive(true);
          bullet.setVisible(true);
          bullet.setScale(0.03); // Adjust bullet size
          scene.physics.moveTo(bullet, pointer.x, pointer.y, 300);

          bullet.body.onWorldBounds = true;
          bullet.body.world.on('worldbounds', function (body) {
            if (body.gameObject === bullet) {
              bullet.destroy(); // Destroy the bullet when it goes offscreen
            }
          });
        }
      }

      function spawnEnemy(scene) {
        const enemy = scene.enemies.create(
          Phaser.Math.Between(100, 1100),
          Phaser.Math.Between(100, 700),
          'enemy'
        );
        enemy.setScale(0.1 + level * 0.01); // Gradual size increase per level
        scene.physics.moveTo(enemy, scene.player.x, scene.player.y, 100 + level * 20); // Gradual speed increase
        enemy.setCollideWorldBounds(true);
        enemy.setBounce(1);
      }

      function gameOver(scene) {
        scene.physics.pause();
        setGameStarted(false);
      }
    }

    return () => {
      if (game) {
        game.destroy(true);
      }
    };
  }, [level, lives, gameStarted]);

  useEffect(() => {
    if (enemiesDefeated >= 5 * level) {
      setShowPuzzle(true);
      setGameStarted(false);
    }
  }, [enemiesDefeated, level]);

  const handleSolvePuzzle = () => {
    setLevel((prevLevel) => prevLevel + 1);
    setEnemiesDefeated(0);
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    setShowPuzzle(false);
    setGameStarted(true);
  };

  return (
    <div>
      <div id="game-container" style={{ width: '1200px', height: '800px' }}></div>
      {!gameStarted && !showPuzzle && (
        <div>
          <button onClick={() => setGameStarted(true)}>Start Game</button>
        </div>
      )}
      {gameStarted && <HUD score={score} lives={lives} level={level} />}
      {showPuzzle && (
        <PuzzleModal
          onSolve={handleSolvePuzzle}
          questionIndex={currentQuestionIndex}
          score={score}
          setScore={setScore}
        />
      )}
    </div>
  );
}

export default PhaserGame;
