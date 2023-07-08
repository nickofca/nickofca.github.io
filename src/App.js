import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Blog from './components/Blog';
import Home from './components/Home';
import About from './components/About';
import styles from './App.module.css';
import ThemeContext from './ThemeContext';
import ThemeToggle from './components/ThemeToggle';

function App() {
  const [theme, setTheme] = useState('light'); // Add state for the theme

  const toggleTheme = () => {
    setTheme((prevTheme) => prevTheme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    // On mount and whenever `theme` changes, update the className of the body
    document.body.className = styles[theme];
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Router>
        <div className={styles.container}>
          <ThemeToggle />
          <nav>
            <ul className={styles.nav}>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </ThemeContext.Provider>
  );
}

export default App;
