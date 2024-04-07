import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import CurrentReads from './components/CurrentReads';
import Recommendations from './components/Recommendations';
import Reviews from './components/Reviews';
import Bookshelf from './components/Bookshelf';
import Tropes from './components/Tropes';
import Authors from './components/Authors';

function App() {
  return (
    <Router>
      <div>
        {/* Navigations Menü */}
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/currentreads">Current Reads</Link></li>
            <li><Link to="/recommendations">Recommendations</Link></li>
            <li><Link to="/reviews">Reviews</Link></li>
            <li><Link to="/bookshelf">Bookshelf</Link></li>
            <li><Link to="/tropes">Tropes</Link></li>
            <li><Link to="/authors">Authors</Link></li>
            {/* Füge mehr Links für neue Seiten hier ein */}
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/currentreads" element={<CurrentReads />} />
          <Route path="/recommendations" element={<Recommendations />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/bookshelf" element={<Bookshelf />} />
          <Route path="/tropes" element={<Tropes />} />
          <Route path="/authors" element={<Authors />} />
          {/* Füge mehr Routen für neue components hier ein */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;