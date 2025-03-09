import { useState, useEffect, FC } from 'react';
import { getFromLocalStorage, setToLocalStorage } from '../../util/localhost';

const isDarkMode = getFromLocalStorage('darkMode') === true;

const ThemeSwitcher: FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(isDarkMode);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => {
      setToLocalStorage('darkMode', !prevMode);

      return !prevMode;
    });
  };

  useEffect(() => {
    document.body.classList.toggle('dark', darkMode);
    document.documentElement.classList.toggle('dark', darkMode);

    if (isDarkMode) {
      setToLocalStorage('darkMode', darkMode);
    }
  }, [darkMode]);

  return (
    <button
      onClick={toggleDarkMode}
      className={`px-4 py-1 rounded-full transition-colors duration-200
        ${darkMode ? 'bg-yellow-400' : 'bg-gray-800'}
        ${darkMode ? 'text-gray-900' : 'text-white'} `}
    >
      {darkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};

export default ThemeSwitcher;
