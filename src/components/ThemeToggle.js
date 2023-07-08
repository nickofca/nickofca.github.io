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
            <path d="M12 6.5c3.026 0 5.5 2.474 5.5 5.5s-2.474 5.5-5.5 5.5-5.5-2.474-5.5-5.5S8.974 6.5 12 6.5zM12 4C7.589 4 4 7.589 4 12s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8z" fill="#708090" />
          </>
        )}
      </svg>
    </div>
  );
}

export default ThemeToggle;
