'use client';

import { useState } from 'react';
import GameShell from '@/components/GameShell';

const LINES = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6]
];

const DIFFICULTIES = [
  { id: 'easy', label: 'Easy' },
  { id: 'medium', label: 'Medium' },
  { id: 'hard', label: 'Hard' }
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
const empties = (board) => board.map((v, i) => (v ? null : i)).filter((i) => i !== null);

// Returns the index that completes a line for `player`, if any.
function findLine(board, player) {
  for (const [a, b, c] of LINES) {
    const line = [a, b, c];
    const marks = line.map((i) => board[i]);
    if (marks.filter((m) => m === player).length === 2 && marks.includes(null)) {
      return line[marks.indexOf(null)];
    }
  }
  return null;
}

// Computer is 'O', human is 'X'.
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

function chooseMove(board, difficulty) {
  const open = empties(board);
  const random = () => open[Math.floor(Math.random() * open.length)];

  if (difficulty === 'easy') return random();

  if (difficulty === 'medium') {
    return findLine(board, 'O') ?? findLine(board, 'X') ?? (board[4] === null ? 4 : random());
  }

  return minimax(board.slice(), true).move ?? random();
}

export default function TicTacToePage() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [locked, setLocked] = useState(false);
  const [difficulty, setDifficulty] = useState('hard');

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
      const move = chooseMove(afterPlayer, difficulty);
      const afterCpu = afterPlayer.slice();
      if (move !== undefined && move !== null) afterCpu[move] = 'O';
      setBoard(afterCpu);
      setLocked(false);
    }, 320);
  }

  function reset() {
    setBoard(Array(9).fill(null));
    setLocked(false);
  }

  function changeDifficulty(id) {
    setDifficulty(id);
    reset();
  }

  return (
    <GameShell
      title="Tic-Tac-Toe"
      tagline="You are X. Pick a difficulty — on Hard the computer plays a perfect game and can't be beaten."
      instructions="Tap a square to place your mark. The computer responds automatically."
      sourceSlug="tic-tac-toe"
    >
      <div className="mb-5 inline-flex rounded-full bg-white/70 p-1 dark:bg-white/5">
        {DIFFICULTIES.map((d) => (
          <button
            key={d.id}
            type="button"
            onClick={() => changeDifficulty(d.id)}
            className={`rounded-full px-4 py-1.5 text-sm font-semibold transition ${
              difficulty === d.id
                ? 'bg-gradient-to-r from-rose to-lavender text-white'
                : 'text-plum/70 hover:text-plum dark:text-white/60 dark:hover:text-white'
            }`}
          >
            {d.label}
          </button>
        ))}
      </div>

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
