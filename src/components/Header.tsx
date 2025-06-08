import React from 'react'
import { Theme, ThemeName } from '@/themes'

interface HeaderProps {
  darkMode: boolean
  onToggleDarkMode: () => void
  theme: Theme
  currentTheme: ThemeName
  onThemeChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

const Header: React.FC<HeaderProps> = ({
  darkMode,
  onToggleDarkMode,
  theme,
  currentTheme,
  onThemeChange,
}) => {
  return (
    <header className={`${theme.header} flex justify-between items-center px-6 py-4 shadow-md`}>
      <h1 className="text-xl font-bold">遊戲攻略整理器</h1>

      <div className="flex items-center space-x-4">
        {/* 主題選擇 */}
        <select
          value={currentTheme}
          onChange={onThemeChange}
          className="rounded border px-2 py-1 text-sm"
        >
          <option value="fantasy">Fantasy</option>
          <option value="nintendo">Nintendo</option>
          <option value="sci-fi">Sci-Fi</option>
        </select>

        {/* 暗黑模式切換 */}
        <button
          onClick={onToggleDarkMode}
          className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
          aria-label="切換暗黑模式"
        >
          {darkMode ? '🌙 Dark' : '☀️ Light'}
        </button>
      </div>
    </header>
  )
}

export default Header


