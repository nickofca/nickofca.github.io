import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Blog from './components/Blog';
import Home from './components/Home'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  );
}

export default App;
