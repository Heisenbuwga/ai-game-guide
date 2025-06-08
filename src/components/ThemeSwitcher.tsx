// ThemeSwitcher.tsx placeholder
import React from 'react';
import { useTheme } from '../App';

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const themes = ['dark','fantasy','sci-fi','nintendo'];
  return (
    <div className="flex gap-2">
      {themes.map(t => (
        <button
          key={t}
          className={`px-3 py-1 rounded ${theme===t ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setTheme(t)}>
          {t}
        </button>
      ))}
    </div>
  );
}
