// App.tsx placeholder
import React, { createContext, useContext, useState } from 'react';
import './index.css';
import Home from './pages/Home';
import { ThemeProvider } from './themes';

type Theme = 'dark'|'fantasy'|'sci-fi'|'nintendo';
const ThemeContext = createContext<{theme:Theme, setTheme:(t:Theme)=>void}>({ theme:'dark', setTheme:()=>{} });
export const useTheme = () => useContext(ThemeContext);

function App() {
  const [theme, setTheme] = useState<Theme>('dark');
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
