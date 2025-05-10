// src/components/GameCanvas.tsx
import { useEffect, useRef, useState } from "react";
import Phaser from "phaser";

export default function GameCanvas() {
  const [gameKey, setGameKey] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Supprimer l'ancien canvas si existant
    canvasRef.current.innerHTML = "";

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
          this.load.image("404", "https://cdn-icons-png.flaticon.com/512/564/564445.png");
          this.load.image("undefined", "https://cdn-icons-png.flaticon.com/512/650/650143.png");
          this.load.image("null", "https://cdn-icons-png.flaticon.com/512/753/753345.png");
          this.load.image("NaN", "https://cdn-icons-png.flaticon.com/512/9904/9904161.png");
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

          const icons = ["404", "undefined", "null", "NaN"];

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

                const replayBtn = this.add.text(110, 340, "Rejouer", {
                  fontSize: "24px",
                  color: "#38bdf8",
                  backgroundColor: "#1e293b",
                  padding: { x: 10, y: 5 },
                })
                  .setInteractive()
                  .on("pointerdown", () => {
                    setGameKey((prev) => prev + 1);
                  });
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
      className="relative z-10 pt-24 min-h-screen flex justify-center items-start bg-transparent px-4"
    >
      <div ref={canvasRef} className="border border-white" />
      <div className="ml-6 w-1/2 text-slate-100">
        <h2 className="text-2xl font-bold mb-4">Attrape les erreurs !</h2>
        <p className="mb-2">Clique sur un maximum d'erreurs (404, NaN, etc.) avant la fin du temps.</p>
        <p>Chaque clic te rapporte 1 point. Bonne chance !</p>
      </div>
    </section>
  );
}
