import './App.css';
import React, {useState, useEffect} from 'react';
import Login from './Pages/Login.js';
import JobList from './Pages/Job-list.js';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Provider} from "react-redux";
import {store, persistor} from "./redux/index.js";
import {PersistGate} from "redux-persist/integration/react";

function App() {
  useEffect(() => {
    document.title = "Github Jobs";
  }, []);

  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<Login />} />
        <Route path="/job-list" element={<JobList />} />
      </Routes>
    </Router>
  );
};

const AppWrapper = () => {
  const [localLoading, setLocalLoading] = useState(true);
  
  useEffect(() => {
    console.info(`Local loading now: ${localLoading}`);
    setTimeout(() => {
      setLocalLoading(false);
      console.info(`Local loading now: ${localLoading}`);
    }, 3000);
  }, []);

  return(
    <Provider store={store}>
      <PersistGate localLoading={false} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  );
};

export default AppWrapper;