// src/components/GameCanvas.tsx
import { useEffect, useRef, useState } from "react";
import Phaser from "phaser";

export default function GameCanvas() {
  const [gameKey, setGameKey] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    canvasRef.current.innerHTML = "";
    setGameOver(false);

    let score = 0;
    let scoreText: Phaser.GameObjects.Text;
    let timerText: Phaser.GameObjects.Text;
    let timeLeft = 30;

    const config: Phaser.Types.Core.GameConfig = {
      type: Phaser.AUTO,
      width: 400,
      height: 600,
      parent: canvasRef.current,
      backgroundColor: "#0f172a",
      physics: {
        default: "arcade",
        arcade: {
          debug: false,
        },
      },
      scene: {
        preload() {
          this.load.image("bug", "https://cdn-icons-png.flaticon.com/512/4006/4006740.png");
          this.load.image("error", "https://cdn-icons-png.flaticon.com/512/564/564445.png");
          this.load.image("alert", "https://cdn-icons-png.flaticon.com/512/595/595067.png");
          this.load.image("warning", "https://cdn-icons-png.flaticon.com/512/1828/1828665.png");
        },
        create() {
          score = 0;
          timeLeft = 30;

          scoreText = this.add.text(16, 16, "Score : 0", {
            fontSize: "20px",
            color: "#f8fafc",
          });

          timerText = this.add.text(220, 16, "Temps : 30", {
            fontSize: "20px",
            color: "#f8fafc",
          });

          const icons = ["bug", "error", "alert", "warning"];

          const spawnIcon = () => {
            const x = Phaser.Math.Between(50, 350);
            const y = Phaser.Math.Between(80, 520);
            const key = Phaser.Utils.Array.GetRandom(icons);
            const icon = this.add.image(x, y, key).setDisplaySize(64, 64).setInteractive();

            icon.on("pointerdown", () => {
              score++;
              scoreText.setText("Score : " + score);
              icon.destroy();
            });

            this.time.addEvent({
              delay: 2000,
              callback: () => icon.destroy(),
              loop: false,
            });
          };

          const spawnLoop = this.time.addEvent({
            delay: 800,
            callback: spawnIcon,
            loop: true,
          });

          const timerLoop = this.time.addEvent({
            delay: 1000,
            callback: () => {
              timeLeft--;
              timerText.setText("Temps : " + timeLeft);

              if (timeLeft <= 0) {
                spawnLoop.remove();
                timerLoop.remove();
                this.scene.pause();

                this.add.text(80, 280, "Temps écoulé !", {
                  fontSize: "28px",
                  color: "#ef4444",
                  fontStyle: "bold",
                });

                setGameOver(true);
              }
            },
            loop: true,
          });
        },
        update() {},
      },
    };

    const game = new Phaser.Game(config);
    return () => {
      game.destroy(true);
    };
  }, [gameKey]);

  return (
    <section
      id="minijeu"
      ref={containerRef}
      className="scroll-mt-40 relative z-10 pt-24 min-h-screen flex flex-col items-center justify-start bg-transparent px-4"
    >
      <div ref={canvasRef} className="border border-white mb-4" />
      {gameOver && (
        <button
          onClick={() => setGameKey((prev) => prev + 1)}
          className="px-6 py-3 bg-sky-500 text-white rounded-full hover:bg-sky-600 transition"
        >
          🔁 Rejouer
        </button>
      )}
      <div className="mt-6 w-1/2 text-slate-100 text-center">
        <h2 className="text-2xl font-bold mb-4">Attrape les erreurs !</h2>
        <p className="mb-2">Clique sur un maximum de bugs, alertes et warnings avant la fin du temps.</p>
        <p>Chaque clic te rapporte 1 point. Bonne chance !</p>
      </div>
    </section>
  );
}
