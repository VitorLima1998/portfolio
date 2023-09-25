'use client';
import { MdOutlineDarkMode, MdLightbulbOutline } from 'react-icons/md';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className='flex items-center text-2xl '>
      <button onClick={toggleTheme}>
        {theme === 'light' ? <MdOutlineDarkMode /> : <MdLightbulbOutline />}
      </button>
    </div>
  );
};

export default ThemeSwitcher;
