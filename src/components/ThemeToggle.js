import React, { useContext } from 'react';
import ThemeContext from '../ThemeContext';
import styles from './ThemeToggle.module.css';


function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={styles.themeToggle} onClick={toggleTheme}>
      <svg className={`${styles.icon} ${theme === 'light' ? styles.sun : styles.moon}`} viewBox="0 0 24 24">
        {theme === 'light' ? (
          <>
            <path d="M12 1v2" stroke="#ffba08" strokeWidth="2" />
            <path d="M12 21v2" stroke="#ffba08" strokeWidth="2" />
            <path d="M4.22 4.22l1.42 1.42" stroke="#ffba08" strokeWidth="2" />
            <path d="M18.36 18.36l1.42 1.42" stroke="#ffba08" strokeWidth="2" />
            <path d="M1 12h2" stroke="#ffba08" strokeWidth="2" />
            <path d="M21 12h2" stroke="#ffba08" strokeWidth="2" />
            <path d="M4.22 19.78l1.42-1.42" stroke="#ffba08" strokeWidth="2" />
            <path d="M18.36 5.64l1.42-1.42" stroke="#ffba08" strokeWidth="2" />
            <circle cx="12" cy="12" r="5" stroke="#ffba08" strokeWidth="2" fill="transparent" />
          </>
        ) : (
          <>
            <path fill="none" stroke="#708090" d="M 20,10 A 10,10 0 0,1 20,30 A 6,6 0 0,1 20,10" />
          </>
        )}
      </svg>
    </div>
  );
}

export default ThemeToggle;
