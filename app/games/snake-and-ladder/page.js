'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import GameShell from '@/components/GameShell';

// from -> to. Ladders go up, snakes go down.
const JUMPS = {
  4: 14, 9: 31, 20: 38, 28: 84, 40: 59, 51: 67, 63: 81, 71: 91,
  17: 7, 54: 34, 62: 19, 64: 60, 87: 24, 93: 73, 95: 75, 99: 78
};

// Build board rows top (100) to bottom (1) with boustrophedon ordering.
function boardRows() {
  const rows = [];
  for (let r = 9; r >= 0; r -= 1) {
    const start = r * 10 + 1;
    const row = Array.from({ length: 10 }, (_, i) => start + i);
    if (r % 2 === 1) row.reverse();
    rows.push(row);
  }
  return rows;
}

const ROWS = boardRows();

export default function SnakeAndLadderPage() {
  const [pos, setPos] = useState([0, 0]); // [you, computer]
  const [turn, setTurn] = useState(0); // 0 = you, 1 = computer
  const [dice, setDice] = useState(null);
  const [message, setMessage] = useState('Roll the dice to start.');
  const [winner, setWinner] = useState(null);
  const [rolling, setRolling] = useState(false);
  const posRef = useRef(pos);
  posRef.current = pos;

  const move = useCallback((player) => {
    const roll = 1 + Math.floor(Math.random() * 6);
    setDice(roll);
    const who = player === 0 ? 'You' : 'Computer';
    const current = posRef.current[player];
    let target = current + roll;

    if (target > 100) {
      setMessage(`${who} rolled ${roll} — need an exact roll to land on 100.`);
    } else {
      const jumped = JUMPS[target];
      if (jumped) {
        const kind = jumped > target ? 'climbed a ladder 🪜' : 'slid down a snake 🐍';
        setMessage(`${who} rolled ${roll}, ${kind} to ${jumped}.`);
        target = jumped;
      } else {
        setMessage(`${who} rolled ${roll} and moved to ${target}.`);
      }
      setPos((prev) => {
        const nextPos = prev.slice();
        nextPos[player] = target;
        return nextPos;
      });
      if (target === 100) {
        setWinner(player);
        setMessage(`${who} reached 100 — ${player === 0 ? 'you win! 🎉' : 'computer wins 🤖'}`);
        return;
      }
    }
    setTurn(player === 0 ? 1 : 0);
  }, []);

  // computer auto-plays its turn
  useEffect(() => {
    if (winner !== null || turn !== 1) return undefined;
    const id = setTimeout(() => move(1), 800);
    return () => clearTimeout(id);
  }, [turn, winner, move]);

  function rollForYou() {
    if (winner !== null || turn !== 0 || rolling) return;
    setRolling(true);
    setTimeout(() => {
      move(0);
      setRolling(false);
    }, 250);
  }

  function reset() {
    setPos([0, 0]);
    setTurn(0);
    setDice(null);
    setWinner(null);
    setMessage('Roll the dice to start.');
  }

  return (
    <GameShell
      title="Snake & Ladder"
      tagline="Race the computer to square 100. Climb ladders, dodge snakes."
      instructions="Ladders 🪜 lift you up, snakes 🐍 drop you down. You need an exact roll to finish on 100."
    >
      <div className="flex w-full flex-col items-center gap-5 lg:flex-row lg:items-start lg:justify-center">
        <div className="grid grid-cols-10 overflow-hidden rounded-2xl border border-plum/15 dark:border-white/10">
          {ROWS.flat().map((n) => {
            const youHere = pos[0] === n;
            const cpuHere = pos[1] === n;
            const jump = JUMPS[n];
            const isLadder = jump && jump > n;
            const isSnake = jump && jump < n;
            return (
              <div
                key={n}
                className={`relative flex h-9 w-9 items-center justify-center text-[9px] font-medium sm:h-10 sm:w-10 sm:text-[10px] ${
                  isLadder
                    ? 'bg-emerald-200/60 text-emerald-900 dark:bg-emerald-500/20 dark:text-emerald-200'
                    : isSnake
                      ? 'bg-rose/30 text-plum dark:bg-rose/20 dark:text-white'
                      : 'bg-white/70 text-plum/70 dark:bg-white/5 dark:text-white/60'
                }`}
              >
                <span className="absolute left-0.5 top-0.5 opacity-70">{n}</span>
                {isLadder && <span className="text-sm">🪜</span>}
                {isSnake && <span className="text-sm">🐍</span>}
                <span className="absolute bottom-0.5 right-0.5 flex gap-0.5">
                  {youHere && <span className="h-2.5 w-2.5 rounded-full bg-plum ring-1 ring-white" title="You" />}
                  {cpuHere && <span className="h-2.5 w-2.5 rounded-full bg-rose ring-1 ring-white" title="Computer" />}
                </span>
              </div>
            );
          })}
        </div>

        <div className="w-full max-w-xs space-y-4">
          <div className="glass-card p-4 text-sm">
            <p className="flex items-center justify-between text-plum dark:text-white">
              <span className="flex items-center gap-2"><span className="h-3 w-3 rounded-full bg-plum" /> You</span>
              <span className="font-semibold">{pos[0]}</span>
            </p>
            <p className="mt-2 flex items-center justify-between text-plum dark:text-white">
              <span className="flex items-center gap-2"><span className="h-3 w-3 rounded-full bg-rose" /> Computer</span>
              <span className="font-semibold">{pos[1]}</span>
            </p>
          </div>

          {dice !== null && (
            <div className="flex items-center justify-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-rose to-lavender text-2xl font-bold text-white shadow-glow">
                {dice}
              </span>
            </div>
          )}

          <p className="min-h-[2.5rem] text-center text-sm text-plum/80 dark:text-white/70">{message}</p>

          {winner === null ? (
            <button
              type="button"
              onClick={rollForYou}
              disabled={turn !== 0 || rolling}
              className="w-full rounded-full bg-gradient-to-r from-rose to-lavender px-6 py-3 text-sm font-semibold text-white transition hover:brightness-105 disabled:opacity-60"
            >
              {turn === 0 ? 'Roll dice' : 'Computer is rolling…'}
            </button>
          ) : (
            <button
              type="button"
              onClick={reset}
              className="w-full rounded-full bg-gradient-to-r from-rose to-lavender px-6 py-3 text-sm font-semibold text-white transition hover:brightness-105"
            >
              Play again
            </button>
          )}
        </div>
      </div>
    </GameShell>
  );
}
