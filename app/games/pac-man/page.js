'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { ArrowUp, ArrowDown, ArrowLeft, ArrowRight } from 'lucide-react';
import GameShell from '@/components/GameShell';

const N = 15;
const CELL = 24;
const SIZE = N * CELL;

const DIRS = {
  up: { dr: -1, dc: 0 },
  down: { dr: 1, dc: 0 },
  left: { dr: 0, dc: -1 },
  right: { dr: 0, dc: 1 }
};

const PAC_START = { r: 13, c: 7 };
const GHOST_DEFS = [
  { r: 7, c: 5, color: '#e78bb7' },
  { r: 7, c: 9, color: '#8b6fb0' },
  { r: 1, c: 7, color: '#f0a868' }
];
const POWER_CELLS = ['1,1', '1,13', '13,1', '13,13'];

// difficulty -> ghost count, how often ghosts step (1 = every tick), chase smartness,
// frightened duration (ticks), and loop speed.
const DIFFICULTY = {
  easy: { label: 'Easy', ghosts: 2, ghostStep: 2, smart: 0.2, fright: 45, tick: 190 },
  medium: { label: 'Medium', ghosts: 2, ghostStep: 1, smart: 0.6, fright: 35, tick: 168 },
  hard: { label: 'Hard', ghosts: 3, ghostStep: 1, smart: 0.9, fright: 26, tick: 150 }
};
const LEVELS = ['easy', 'medium', 'hard'];

function buildMaze() {
  const m = [];
  for (let r = 0; r < N; r += 1) {
    const row = [];
    for (let c = 0; c < N; c += 1) {
      const border = r === 0 || c === 0 || r === N - 1 || c === N - 1;
      const post = r % 2 === 0 && c % 2 === 0;
      row.push(border || post ? 1 : 0);
    }
    m.push(row);
  }
  return m;
}

const MAZE = buildMaze();
const isWall = (r, c) => r < 0 || c < 0 || r >= N || c >= N || MAZE[r][c] === 1;

function freshState(level) {
  const cfg = DIFFICULTY[level];
  const pellets = new Set();
  for (let r = 0; r < N; r += 1) {
    for (let c = 0; c < N; c += 1) {
      if (!isWall(r, c)) pellets.add(`${r},${c}`);
    }
  }
  const power = new Set(POWER_CELLS);
  power.forEach((k) => pellets.delete(k));
  pellets.delete(`${PAC_START.r},${PAC_START.c}`);

  const ghosts = GHOST_DEFS.slice(0, cfg.ghosts).map((g) => {
    pellets.delete(`${g.r},${g.c}`);
    power.delete(`${g.r},${g.c}`);
    return { r: g.r, c: g.c, sr: g.r, sc: g.c, color: g.color, dir: DIRS.up };
  });

  return { cfg, pac: { ...PAC_START }, dir: DIRS.left, next: DIRS.left, ghosts, pellets, power, fright: 0, frame: 0 };
}

export default function PacManPage() {
  const canvasRef = useRef(null);
  const game = useRef(null);
  const [level, setLevel] = useState('medium');
  const [score, setScore] = useState(0);
  const [fright, setFright] = useState(0);
  const [running, setRunning] = useState(false);
  const [result, setResult] = useState(null); // 'win' | 'lose' | null

  const draw = useCallback(() => {
    const ctx = canvasRef.current?.getContext('2d');
    const g = game.current;
    if (!ctx || !g) return;

    ctx.fillStyle = '#0f0a18';
    ctx.fillRect(0, 0, SIZE, SIZE);

    for (let r = 0; r < N; r += 1) {
      for (let c = 0; c < N; c += 1) {
        const x = c * CELL;
        const y = r * CELL;
        const key = `${r},${c}`;
        if (isWall(r, c)) {
          ctx.fillStyle = '#3b2a6e';
          ctx.beginPath();
          ctx.roundRect(x + 2, y + 2, CELL - 4, CELL - 4, 5);
          ctx.fill();
        } else if (g.power.has(key)) {
          ctx.fillStyle = '#ffd27f';
          ctx.beginPath();
          ctx.arc(x + CELL / 2, y + CELL / 2, g.frame % 2 === 0 ? 6 : 5, 0, Math.PI * 2);
          ctx.fill();
        } else if (g.pellets.has(key)) {
          ctx.fillStyle = '#f3d9e8';
          ctx.beginPath();
          ctx.arc(x + CELL / 2, y + CELL / 2, 2.5, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }

    // pac-man
    const pcx = g.pac.c * CELL + CELL / 2;
    const pcy = g.pac.r * CELL + CELL / 2;
    const faces = [
      [DIRS.right, 0], [DIRS.down, Math.PI / 2], [DIRS.left, Math.PI], [DIRS.up, (3 * Math.PI) / 2]
    ];
    const face = faces.find(([d]) => d === g.dir)?.[1] ?? 0;
    const open = g.frame % 2 === 0 ? 0.5 : 0.12;
    ctx.fillStyle = '#facc15';
    ctx.beginPath();
    ctx.moveTo(pcx, pcy);
    ctx.arc(pcx, pcy, CELL / 2 - 2, face + open, face + 2 * Math.PI - open);
    ctx.closePath();
    ctx.fill();

    // ghosts
    g.ghosts.forEach((gh) => {
      const cx = gh.c * CELL + CELL / 2;
      const cy = gh.r * CELL + CELL / 2;
      const R = CELL / 2 - 2;
      const scared = g.fright > 0;
      ctx.fillStyle = scared ? (g.fright < 8 && g.frame % 2 === 0 ? '#ffffff' : '#3b5bdb') : gh.color;
      ctx.beginPath();
      ctx.arc(cx, cy - 1, R, Math.PI, 0);
      ctx.lineTo(cx + R, cy + R);
      ctx.lineTo(cx - R, cy + R);
      ctx.closePath();
      ctx.fill();
      ctx.fillStyle = '#fff';
      ctx.beginPath();
      ctx.arc(cx - R / 2.5, cy - 1, 2.6, 0, Math.PI * 2);
      ctx.arc(cx + R / 2.5, cy - 1, 2.6, 0, Math.PI * 2);
      ctx.fill();
    });
  }, []);

  const start = useCallback((lvl) => {
    game.current = freshState(lvl ?? level);
    setScore(0);
    setFright(0);
    setResult(null);
    setRunning(true);
    draw();
  }, [level, draw]);

  const setDir = useCallback((name) => {
    const g = game.current;
    if (g) g.next = DIRS[name];
  }, []);

  const moveGhost = useCallback((gh, g) => {
    const options = Object.values(DIRS).filter((d) => {
      if (isWall(gh.r + d.dr, gh.c + d.dc)) return false;
      return !(d.dr === -gh.dir.dr && d.dc === -gh.dir.dc);
    });
    const choices = options.length
      ? options
      : Object.values(DIRS).filter((d) => !isWall(gh.r + d.dr, gh.c + d.dc));
    if (!choices.length) return;

    const chase = g.fright === 0 && Math.random() < g.cfg.smart;
    let pick;
    if (chase) {
      pick = choices.reduce((best, d) => {
        const dist = Math.abs(gh.r + d.dr - g.pac.r) + Math.abs(gh.c + d.dc - g.pac.c);
        return dist < best.dist ? { d, dist } : best;
      }, { d: choices[0], dist: Infinity }).d;
    } else {
      pick = choices[Math.floor(Math.random() * choices.length)];
    }
    gh.dir = pick;
    gh.r += pick.dr;
    gh.c += pick.dc;
  }, []);

  useEffect(() => {
    if (!running) return undefined;
    const cfg = game.current?.cfg ?? DIFFICULTY[level];
    const id = setInterval(() => {
      const g = game.current;
      if (!g) return;
      g.frame += 1;
      if (g.fright > 0) {
        g.fright -= 1;
        setFright(g.fright);
      }

      if (!isWall(g.pac.r + g.next.dr, g.pac.c + g.next.dc)) g.dir = g.next;
      if (!isWall(g.pac.r + g.dir.dr, g.pac.c + g.dir.dc)) {
        g.pac.r += g.dir.dr;
        g.pac.c += g.dir.dc;
      }

      const key = `${g.pac.r},${g.pac.c}`;
      if (g.pellets.has(key)) {
        g.pellets.delete(key);
        setScore((s) => s + 1);
      } else if (g.power.has(key)) {
        g.power.delete(key);
        g.fright = cfg.fright;
        setFright(cfg.fright);
        setScore((s) => s + 5);
      }

      // collision check helper: returns 'lose' or null, eats frightened ghosts
      const collide = () => {
        for (const gh of g.ghosts) {
          if (gh.r === g.pac.r && gh.c === g.pac.c) {
            if (g.fright > 0) {
              gh.r = gh.sr;
              gh.c = gh.sc;
              gh.dir = DIRS.up;
              setScore((s) => s + 10);
            } else {
              return 'lose';
            }
          }
        }
        return null;
      };

      if (collide() === 'lose') { setRunning(false); setResult('lose'); return; }

      if (g.frame % cfg.ghostStep === 0) {
        g.ghosts.forEach((gh) => moveGhost(gh, g));
      }

      if (collide() === 'lose') { setRunning(false); setResult('lose'); return; }
      if (g.pellets.size === 0 && g.power.size === 0) { setRunning(false); setResult('win'); return; }

      draw();
    }, cfg.tick);
    return () => clearInterval(id);
  }, [running, level, draw, moveGhost]);

  useEffect(() => {
    const onKey = (e) => {
      const map = {
        ArrowUp: 'up', ArrowDown: 'down', ArrowLeft: 'left', ArrowRight: 'right',
        w: 'up', s: 'down', a: 'left', d: 'right'
      };
      const name = map[e.key];
      if (!name) return;
      e.preventDefault();
      setDir(name);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [setDir]);

  return (
    <GameShell
      title="Pac-Man"
      tagline="Eat every pellet to clear the maze. Grab a big power pellet to turn the ghosts blue and edible for a few seconds."
      instructions="Arrow keys (or WASD) to move; on mobile use the on-screen pad. One touch from a normal ghost ends the run."
      sourceSlug="pac-man"
    >
      <div className="mb-5 inline-flex rounded-full bg-white/70 p-1 dark:bg-white/5">
        {LEVELS.map((lvl) => (
          <button
            key={lvl}
            type="button"
            onClick={() => { setLevel(lvl); start(lvl); }}
            className={`rounded-full px-4 py-1.5 text-sm font-semibold capitalize transition ${
              level === lvl
                ? 'bg-gradient-to-r from-rose to-lavender text-white'
                : 'text-plum/70 hover:text-plum dark:text-white/60 dark:hover:text-white'
            }`}
          >
            {DIFFICULTY[lvl].label}
          </button>
        ))}
      </div>

      <p className="mb-4 flex items-center gap-4 text-lg font-semibold text-plum dark:text-lavender">
        <span>Score: {score}</span>
        {fright > 0 && <span className="text-sm font-medium text-blue-600 dark:text-blue-300">Ghosts edible! 👻</span>}
      </p>

      <div className="relative">
        <canvas
          ref={canvasRef}
          width={SIZE}
          height={SIZE}
          className="max-w-full rounded-2xl border border-plum/15 dark:border-white/10"
        />
        {!running && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 rounded-2xl bg-white/70 backdrop-blur-sm dark:bg-midnight/70">
            {result === 'win' && <p className="text-xl font-semibold text-plum dark:text-white">You cleared the maze! 🎉</p>}
            {result === 'lose' && <p className="text-xl font-semibold text-plum dark:text-white">Caught! Score: {score}</p>}
            <button
              type="button"
              onClick={() => start()}
              className="rounded-full bg-gradient-to-r from-rose to-lavender px-6 py-2.5 text-sm font-semibold text-white transition hover:brightness-105"
            >
              {result ? 'Play again' : `Start (${DIFFICULTY[level].label})`}
            </button>
          </div>
        )}
      </div>

      <div className="mt-6 grid w-40 grid-cols-3 gap-2 sm:hidden">
        <span />
        <PadButton onClick={() => setDir('up')}><ArrowUp size={18} /></PadButton>
        <span />
        <PadButton onClick={() => setDir('left')}><ArrowLeft size={18} /></PadButton>
        <PadButton onClick={() => setDir('down')}><ArrowDown size={18} /></PadButton>
        <PadButton onClick={() => setDir('right')}><ArrowRight size={18} /></PadButton>
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
