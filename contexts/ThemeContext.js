import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Only run on client side (not during SSR)
    if (typeof window === 'undefined') return;

    // Always use system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    console.log('Using system preference. Dark mode:', prefersDark);
    setIsDarkMode(prefersDark);

    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleSystemThemeChange = (e) => {
      console.log('System theme changed. Dark mode:', e.matches);
      setIsDarkMode(e.matches);
    };

    mediaQuery.addEventListener('change', handleSystemThemeChange);
    
    // Cleanup listener
    return () => {
      mediaQuery.removeEventListener('change', handleSystemThemeChange);
    };
  }, []);

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;
    
    // Update CSS custom properties when theme changes
    const root = document.documentElement;
    if (isDarkMode) {
      root.style.setProperty('--text-color', '#a8b4d1');
      root.style.setProperty('--bg-color', '#1a1a1a');
      root.style.setProperty('--tag-bg-color', 'rgba(212, 220, 241, 0.1)');
      root.style.setProperty('--progress-bg-color', 'rgba(212, 220, 241, 0.1)');
      root.style.setProperty('--divider-bg-color', 'rgba(212, 220, 241, 0.2)');
    } else {
      root.style.setProperty('--text-color', '#52648e');
      root.style.setProperty('--bg-color', '#ffffff');
      root.style.setProperty('--tag-bg-color', 'rgba(212, 220, 241, 0.3)');
      root.style.setProperty('--progress-bg-color', '#e5e7eb');
      root.style.setProperty('--divider-bg-color', 'rgba(212, 220, 241, 0.4)');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};