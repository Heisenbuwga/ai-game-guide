export { getInitialDarkMode, setDarkMode } from './dark';
export { fantasyTheme } from './fantasy';
export { nintendoTheme } from './nintendo';
export { sciFiTheme } from './sci-fi';

// 你也可以在這裡建立一個簡單的 ThemeProvider
// 這裡示範一個用 React Context 的簡單範例

import React, { ReactNode, createContext, useState, useEffect } from 'react';

export type ThemeName = 'dark' | 'fantasy' | 'nintendo' | 'sci-fi';

interface ThemeContextType {
  themeName: ThemeName;
  setThemeName: (name: ThemeName) => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  themeName: 'dark',
  setThemeName: () => {},
});

export const ThemeProvider = ({ children, defaultTheme = 'dark' }: { children: ReactNode; defaultTheme?: ThemeName }) => {
  const [themeName, setThemeName] = useState<ThemeName>(defaultTheme);

  // 這裡可以放一些根據 themeName 變更全局樣式的邏輯
  useEffect(() => {
    if (themeName === 'dark') {
      // Dark mode 例子：用 dark.ts 提供的函式或自行切換class
      // 你可以用 setDarkMode(true) 或直接操作 classList
      import('./dark').then(({ setDarkMode }) => setDarkMode(true));
    } else {
      import('./dark').then(({ setDarkMode }) => setDarkMode(false));
    }
    // 其他主題可放這裡做對應設定
  }, [themeName]);

  return (
    <ThemeContext.Provider value={{ themeName, setThemeName }}>
      {children}
    </ThemeContext.Provider>
  );
};
