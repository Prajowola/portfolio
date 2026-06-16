'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { ArrowUp, ArrowDown, ArrowLeft, ArrowRight } from 'lucide-react';
import GameShell from '@/components/GameShell';

const CELLS = 20;
const CELL = 18;
const SIZE = CELLS * CELL;
const SPEED = 110;

export default function SnakePage() {
  const canvasRef = useRef(null);
  const game = useRef(null);
  const [score, setScore] = useState(0);
  const [running, setRunning] = useState(false);
  const [over, setOver] = useState(false);

  const randomFood = useCallback((snake) => {
    let f;
    do {
      f = { x: Math.floor(Math.random() * CELLS), y: Math.floor(Math.random() * CELLS) };
    } while (snake.some((s) => s.x === f.x && s.y === f.y));
    return f;
  }, []);

  const draw = useCallback(() => {
    const ctx = canvasRef.current?.getContext('2d');
    const g = game.current;
    if (!ctx || !g) return;

    ctx.clearRect(0, 0, SIZE, SIZE);
    // food
    ctx.fillStyle = '#e78bb7';
    ctx.beginPath();
    ctx.arc(g.food.x * CELL + CELL / 2, g.food.y * CELL + CELL / 2, CELL / 2 - 2, 0, Math.PI * 2);
    ctx.fill();
    // snake
    g.snake.forEach((s, i) => {
      ctx.fillStyle = i === 0 ? '#5d3b6e' : '#9b7bb8';
      ctx.beginPath();
      ctx.roundRect(s.x * CELL + 1, s.y * CELL + 1, CELL - 2, CELL - 2, 5);
      ctx.fill();
    });
  }, []);

  const start = useCallback(() => {
    const snake = [{ x: 8, y: 10 }, { x: 7, y: 10 }, { x: 6, y: 10 }];
    game.current = { snake, dir: { x: 1, y: 0 }, next: { x: 1, y: 0 }, food: randomFood(snake) };
    setScore(0);
    setOver(false);
    setRunning(true);
  }, [randomFood]);

  const setDir = useCallback((x, y) => {
    const g = game.current;
    if (!g) return;
    // prevent reversing directly
    if (g.dir.x + x === 0 && g.dir.y + y === 0) return;
    g.next = { x, y };
  }, []);

  // game loop
  useEffect(() => {
    if (!running) return undefined;
    const id = setInterval(() => {
      const g = game.current;
      if (!g) return;
      g.dir = g.next;
      const head = { x: g.snake[0].x + g.dir.x, y: g.snake[0].y + g.dir.y };

      const hitWall = head.x < 0 || head.y < 0 || head.x >= CELLS || head.y >= CELLS;
      const hitSelf = g.snake.some((s) => s.x === head.x && s.y === head.y);
      if (hitWall || hitSelf) {
        setRunning(false);
        setOver(true);
        return;
      }

      g.snake.unshift(head);
      if (head.x === g.food.x && head.y === g.food.y) {
        setScore((s) => s + 1);
        g.food = randomFood(g.snake);
      } else {
        g.snake.pop();
      }
      draw();
    }, SPEED);
    return () => clearInterval(id);
  }, [running, draw, randomFood]);

  // keyboard
  useEffect(() => {
    const onKey = (e) => {
      const map = {
        ArrowUp: [0, -1], ArrowDown: [0, 1], ArrowLeft: [-1, 0], ArrowRight: [1, 0],
        w: [0, -1], s: [0, 1], a: [-1, 0], d: [1, 0]
      };
      const m = map[e.key];
      if (!m) return;
      e.preventDefault();
      setDir(m[0], m[1]);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [setDir]);

  useEffect(() => { draw(); }, [draw]);

  return (
    <GameShell
      title="Snake"
      tagline="Eat the pink food to grow. Don't hit the walls or yourself."
      instructions="Use the arrow keys (or WASD) on desktop, or the on-screen pad on mobile."
      sourceSlug="snake"
    >
      <p className="mb-4 text-lg font-semibold text-plum dark:text-lavender">Score: {score}</p>

      <div className="relative">
        <canvas
          ref={canvasRef}
          width={SIZE}
          height={SIZE}
          className="max-w-full rounded-2xl border border-plum/15 bg-white/70 dark:border-white/10 dark:bg-white/5"
        />
        {!running && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 rounded-2xl bg-white/70 backdrop-blur-sm dark:bg-midnight/70">
            {over && <p className="text-xl font-semibold text-plum dark:text-white">Game over — score {score}</p>}
            <button
              type="button"
              onClick={start}
              className="rounded-full bg-gradient-to-r from-rose to-lavender px-6 py-2.5 text-sm font-semibold text-white transition hover:brightness-105"
            >
              {over ? 'Play again' : 'Start game'}
            </button>
          </div>
        )}
      </div>

      <div className="mt-6 grid w-40 grid-cols-3 gap-2 sm:hidden">
        <span />
        <PadButton onClick={() => setDir(0, -1)}><ArrowUp size={18} /></PadButton>
        <span />
        <PadButton onClick={() => setDir(-1, 0)}><ArrowLeft size={18} /></PadButton>
        <PadButton onClick={() => setDir(0, 1)}><ArrowDown size={18} /></PadButton>
        <PadButton onClick={() => setDir(1, 0)}><ArrowRight size={18} /></PadButton>
      </div>
    </GameShell>
  );
}

function PadButton({ onClick, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex h-12 items-center justify-center rounded-xl bg-white/80 text-plum active:scale-95 dark:bg-white/10 dark:text-white"
    >
      {children}
    </button>
  );
}
