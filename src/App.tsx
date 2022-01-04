import React from 'react';
import { Link } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>schnelltesttest.de</h1>
        <Link to="/scan">Alright, let's start scanning</Link>
      </header>
    </div>
  );
}

export default App;
