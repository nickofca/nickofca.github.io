// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <nav>
        <ul className={styles.nav}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      <div className={styles.highlight}>
        <h1>Welcome to My Homepage</h1>
        <p>This is the highlight of my homepage. More content to come soon!</p>
      </div>
    </div>
  );
}

export default Home;
