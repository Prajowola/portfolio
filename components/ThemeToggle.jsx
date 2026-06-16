'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <span className="h-9 w-9 shrink-0 rounded-full" aria-hidden="true" />;
  }

  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-plum/20 bg-white/70 text-plum transition hover:-translate-y-0.5 dark:border-lavender/20 dark:bg-midnightCard/70 dark:text-lavender"
    >
      {isDark ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}
