'use client';

import { useState } from 'react';
import GameShell from '@/components/GameShell';

const LINES = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6]
];

function getWinner(board) {
  for (const [a, b, c] of LINES) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return { player: board[a], line: [a, b, c] };
    }
  }
  return null;
}

const isFull = (board) => board.every(Boolean);

// Computer is 'O', human is 'X'. Returns { score, move }.
function minimax(board, isMax) {
  const win = getWinner(board);
  if (win) return { score: win.player === 'O' ? 1 : -1 };
  if (isFull(board)) return { score: 0 };

  let best = isMax ? { score: -Infinity } : { score: Infinity };
  for (let i = 0; i < 9; i += 1) {
    if (board[i]) continue;
    board[i] = isMax ? 'O' : 'X';
    const { score } = minimax(board, !isMax);
    board[i] = null;
    if (isMax ? score > best.score : score < best.score) best = { score, move: i };
  }
  return best;
}

export default function TicTacToePage() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [locked, setLocked] = useState(false);

  const win = getWinner(board);
  const done = win || isFull(board);
  const status = win
    ? win.player === 'X' ? 'You win! 🎉' : 'Computer wins 🤖'
    : isFull(board) ? "It's a draw 🤝" : 'Your turn (X)';

  function handleClick(i) {
    if (board[i] || done || locked) return;
    const afterPlayer = board.slice();
    afterPlayer[i] = 'X';
    setBoard(afterPlayer);

    if (getWinner(afterPlayer) || isFull(afterPlayer)) return;

    setLocked(true);
    setTimeout(() => {
      const { move } = minimax(afterPlayer.slice(), true);
      const afterCpu = afterPlayer.slice();
      if (move !== undefined) afterCpu[move] = 'O';
      setBoard(afterCpu);
      setLocked(false);
    }, 350);
  }

  function reset() {
    setBoard(Array(9).fill(null));
    setLocked(false);
  }

  return (
    <GameShell
      title="Tic-Tac-Toe"
      tagline="You are X. The computer plays a perfect game — the best you can do is a draw."
      instructions="Tap a square to place your mark. The computer responds automatically."
    >
      <p className="mb-4 text-lg font-semibold text-plum dark:text-lavender">{status}</p>

      <div className="grid grid-cols-3 gap-2">
        {board.map((cell, i) => {
          const highlight = win && win.line.includes(i);
          return (
            <button
              key={i}
              type="button"
              onClick={() => handleClick(i)}
              disabled={!!cell || !!done || locked}
              className={`flex h-24 w-24 items-center justify-center rounded-2xl text-4xl font-bold transition disabled:cursor-default ${
                highlight
                  ? 'bg-gradient-to-br from-rose to-lavender text-white'
                  : 'bg-white/80 text-plum hover:bg-white dark:bg-white/5 dark:text-white dark:hover:bg-white/10'
              }`}
            >
              {cell}
            </button>
          );
        })}
      </div>

      <button
        type="button"
        onClick={reset}
        className="mt-6 rounded-full bg-gradient-to-r from-rose to-lavender px-6 py-2.5 text-sm font-semibold text-white transition hover:brightness-105"
      >
        New game
      </button>
    </GameShell>
  );
}
