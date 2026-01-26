import { Logo } from '../../icon';
import ThemeSwitcher from '../ThemeSwitcher';
import { getFromLocalStorage, setToLocalStorage } from '../../util/localhost';
import { useState } from 'react';

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    getFromLocalStorage('darkMode') === true
  );

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    setToLocalStorage('darkMode', newMode);
  };

  return (
    <div className='flex mb-10'>
      <Logo isDarkMode={isDarkMode} />
      <h1 className='ml-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl'>
        <span className='text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400'>
          Branch name creator
        </span>
      </h1>
      <div className='ml-auto flex'>
        <ThemeSwitcher isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      </div>
    </div>
  );
};

export default Header;
