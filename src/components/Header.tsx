import React from 'react'

type HeaderProps = {
  darkMode: boolean
  onToggleDarkMode: () => void
}

const Header: React.FC<HeaderProps> = ({ darkMode, onToggleDarkMode }) => {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-gray-100 dark:bg-gray-900 shadow-md">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
        🎮 AI 遊戲攻略整理器
      </h1>
      <button
        onClick={onToggleDarkMode}
        className="px-4 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition"
      >
        {darkMode ? '🌞 明亮模式' : '🌙 暗黑模式'}
      </button>
    </header>
  )
}

export default Header

