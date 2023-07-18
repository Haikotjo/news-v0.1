import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
  );
}

export default App;
