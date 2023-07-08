// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../App.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.highlight}>
        <h1>Welcome to My Homepage</h1>
        <p>This is the highlight of my homepage. More content to come soon!</p>
      </div>
    </div>
  );
}

export default Home;
