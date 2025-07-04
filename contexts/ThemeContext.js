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
    // Check if user has a saved preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    }
  }, []);

  useEffect(() => {
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
    
    // Save preference to localStorage
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
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