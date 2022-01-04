import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Scanner from './routes/Scanner';
import Result from './routes/Result';
import About from './routes/About';
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="scan" element={<Scanner />} />
      <Route path="result" element={<Result />} />
      <Route path="about" element={<About />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
