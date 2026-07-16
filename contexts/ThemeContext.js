import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

const applyTheme = (isDark) => {
  if (typeof document === 'undefined') return;
  document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
};

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    // Sync both React state and the data-theme attribute to the *actual*
    // preference. We apply the true value directly (rather than via a
    // [isDarkMode]-dependent effect) so we never momentarily clobber the theme
    // the pre-paint inline script in _document already set — which would flash
    // the light palette for dark-mode visitors.
    const sync = (isDark) => {
      setIsDarkMode(isDark);
      applyTheme(isDark);
    };

    sync(mediaQuery.matches);

    const handleSystemThemeChange = (e) => sync(e.matches);
    mediaQuery.addEventListener('change', handleSystemThemeChange);
    return () => mediaQuery.removeEventListener('change', handleSystemThemeChange);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((prev) => {
      const next = !prev;
      applyTheme(next);
      return next;
    });
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
