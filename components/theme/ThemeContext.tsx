'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Theme = 'dark' | 'light';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (t: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const initialized = localStorage.getItem('qf-theme-v3-init');
      const saved = localStorage.getItem('qf-theme-pref') as Theme | null;
      if (initialized && (saved === 'light' || saved === 'dark')) {
        setThemeState(saved);
        document.documentElement.setAttribute('data-theme', saved);
      } else {
        // Default is light mode
        setThemeState('light');
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('qf-theme-v3-init', '1');
        localStorage.setItem('qf-theme-pref', 'light');
        localStorage.setItem('qf-theme', 'light');
      }
    } catch {
      setThemeState('light');
      document.documentElement.setAttribute('data-theme', 'light');
    }
    setMounted(true);
  }, []);

  const setTheme = (t: Theme) => {
    setThemeState(t);
    try {
      localStorage.setItem('qf-theme-pref', t);
      localStorage.setItem('qf-theme', t);
    } catch {}
    document.documentElement.setAttribute('data-theme', t);
  };

  const toggleTheme = () => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
  };

  return (
    <ThemeContext.Provider value={{ theme: mounted ? theme : 'light', toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    return {
      theme: 'light' as Theme,
      toggleTheme: () => {},
      setTheme: () => {},
    };
  }
  return context;
}
