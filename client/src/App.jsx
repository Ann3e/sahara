import React, { useEffect, useState } from 'react';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

import LandingPage from './pages/LandingPage';
import { Routes, Route, Navigate } from 'react-router';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home';
import DSAtracker from './pages/DSAtracker';
import InterviewPrep from './pages/InterviewPrep';
import QuestionPage from './pages/QuestionPage';

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    setToken(storedToken); 
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={token ? <Navigate to="/home" /> : <Login />} />
        <Route path="/signup" element={token ? <Navigate to="/home" /> : <SignUp />} />

        <Route path="/home" element={<Home />} />
        <Route path="/dsaTracker" element={<DSAtracker />} />
        <Route path="/questions/:id" element={<QuestionPage/>} />

        <Route path="/interviewPrep" element={<InterviewPrep />} />
      </Routes>
    </div>
  );
}

export default App;
