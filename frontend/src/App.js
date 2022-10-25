import './App.css';
import React, {useEffect} from 'react';
import Login from './Pages/Login.js';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  useEffect(() => {
    document.title = "Github Jobs";
  }, []);

  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;