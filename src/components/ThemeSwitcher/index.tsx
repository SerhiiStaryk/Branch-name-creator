import { useEffect } from 'react';

interface ThemeSwitcherProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const ThemeSwitcher = ({ isDarkMode, toggleTheme }: ThemeSwitcherProps) => {
  useEffect(() => {
    document.body.classList.toggle('dark', isDarkMode);
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  return (
    <button
      onClick={toggleTheme}
      className={`px-4 py-1 rounded-full transition-colors duration-200
        ${isDarkMode ? 'bg-yellow-400' : 'bg-gray-800'}
        ${isDarkMode ? 'text-gray-900' : 'text-white'} `}
    >
      {isDarkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};

export default ThemeSwitcher;
