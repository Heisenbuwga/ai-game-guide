import React, { useEffect, useState } from 'react'
import Header from '@/components/Header'
import GuideCard from '@/components/GuideCard'
import { themes, ThemeName } from '@/themes'

const LOCAL_STORAGE_KEY = 'game-guide-theme'
const LOCAL_STORAGE_DARK = 'game-guide-darkmode'

const Home: React.FC = () => {
  // 讀取 localStorage 主題，預設 'fantasy'
  const [themeName, setThemeName] = useState<ThemeName>(() => {
    return (localStorage.getItem(LOCAL_STORAGE_KEY) as ThemeName) || 'fantasy'
  })

  // 讀取 dark mode，預設 false
  const [darkMode, setDarkMode] = useState(() => {
    const stored = localStorage.getItem(LOCAL_STORAGE_DARK)
    return stored === 'true' ? true : false
  })

  const theme = themes[themeName]

  // 同步主題與 dark mode 狀態到 localStorage
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, themeName)
  }, [themeName])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_DARK, darkMode.toString())
  }, [darkMode])

  // 假攻略資料
  const guides = [
    {
      title: '薩爾達傳說：神廟解謎',
      content: '點燃兩個火把，石門會自動開啟。',
      image: 'https://example.com/zelda.jpg',
    },
    {
      title: '艾爾登法環：打敗Boss技巧',
      content: '保持距離、翻滾反擊是關鍵。',
    },
  ]

  // 切換暗黑模式
  const toggleDarkMode = () => setDarkMode((prev) => !prev)

  // 切換主題
  const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setThemeName(e.target.value as ThemeName)
  }

  return (
    <div
      className={`${theme.background} ${theme.font} min-h-screen transition-colors duration-500 ${
        darkMode ? 'dark' : ''
      }`}
    >
      <Header
        darkMode={darkMode}
        onToggleDarkMode={toggleDarkMode}
        theme={theme}
        currentTheme={themeName}
        onThemeChange={handleThemeChange}
      />

      <main className="max-w-4xl mx-auto p-6">
        {guides.map((guide, idx) => (
          <GuideCard
            key={idx}
            title={guide.title}
            content={guide.content}
            image={guide.image}
            theme={theme}
          />
        ))}
      </main>
    </div>
  )
}

export default Home
