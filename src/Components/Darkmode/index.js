import { useState } from 'react';

const DarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(previousState => !previousState);
  };

  return { isDarkMode, toggleDarkMode };
};

export default DarkMode;