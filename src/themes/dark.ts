export const getInitialDarkMode = (): boolean => {
  if (typeof window === 'undefined') return false

  const stored = localStorage.getItem('darkMode')
  if (stored !== null) {
    return stored === 'true'
  }

  // 如果使用者沒有設定，就依照系統偏好
  return window.matchMedia &&
         window.matchMedia('(prefers-color-scheme: dark)').matches
}

export const setDarkMode = (enabled: boolean) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('darkMode', String(enabled))
    document.documentElement.classList.toggle('dark', enabled)
  }
}

