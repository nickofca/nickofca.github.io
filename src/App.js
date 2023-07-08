import React from 'react';
import { HashRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Blog from './components/Blog';
import Home from './components/Home';
import About from './components/About';
import styles from './App.module.css';  // Import the CSS module

function App() {
  return (
    <Router>
      <div className={styles.container}>
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
  );
}

export default App;
