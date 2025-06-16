import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import Navbar from '../components/Navbar';

const Home = () => {
  const [user, setUser] = useState('');

  useEffect(() => {
    const username = localStorage.getItem('loggedInUser');
    if (username) setUser(username);
  }, []);

  return (
    <>
      <Navbar />
      <div className="pt-24 px-6 bg-gradient-to-br from-yellow-50 to-white min-h-screen">
        <div className="max-w-6xl mx-auto text-gray-800">
          <h1 className="text-4xl font-bold text-orange-600 mb-2">Welcome back, {user || 'User'} 👋</h1>
          <p className="text-gray-600 text-lg mb-8">Ready to crush your goals today?</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link to="/dsaTracker">
              <div className="bg-white p-6 rounded-2xl shadow hover:shadow-md transition border-t-4 border-orange-500">
                <h2 className="text-xl font-semibold text-orange-700 mb-2">📘 DSA Tracker</h2>
                <p className="text-gray-600">Track your questions, topics, and progress.</p>
              </div>
            </Link>

            <Link to="/interviewPrep">
              <div className="bg-white p-6 rounded-2xl shadow hover:shadow-md transition border-t-4 border-blue-600">
                <h2 className="text-xl font-semibold text-blue-700 mb-2">🎤 Mock Interview</h2>
                <p className="text-gray-600">Practice coding interviews with voice notes and more.</p>
              </div>
            </Link>

            <Link to="/dsaTracker">
              <div className="bg-white p-6 rounded-2xl shadow hover:shadow-md transition border-t-4 border-green-600">
                <h2 className="text-xl font-semibold text-green-700 mb-2">➕ Add Question</h2>
                <p className="text-gray-600">Add a new problem to your practice set.</p>
              </div>
            </Link>

            {/* Optional: Profile / Settings card */}
            {/* <Link to="/profile">
              <div className="bg-white p-6 rounded-2xl shadow hover:shadow-md transition border-t-4 border-purple-600">
                <h2 className="text-xl font-semibold text-purple-700 mb-2">👤 My Profile</h2>
                <p className="text-gray-600">View or edit your preferences and stats.</p>
              </div>
            </Link> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
