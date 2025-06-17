import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router';

const Navbar = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState('');

  useEffect(() => {
    const name = localStorage.getItem('loggedInUser');
    if (!name) {
      navigate('/login');
    } else {
      setUser(name);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('loggedInUser');
    navigate('/login');
  };

  return (
    <nav className="bg-white fixed top-0 left-0 w-full z-30 border-b border-gray-200 shadow-sm">
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-semibold text-orange-600">sahara</span>
        </Link>

        {/* Nav Links */}
        <div className="flex items-center space-x-6 text-sm font-medium text-gray-800">
          <Link to="/dsaTracker" className="hover:text-orange-600 transition">
            DSA Tracker
          </Link>
          <Link to="/interviewPrep" className="hover:text-orange-600 transition">
            Mock Interview
          </Link>
        </div>

        {/* Logout Button */}
        <div className="flex items-center space-x-3">
         
          <button
            onClick={handleLogout}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded-md text-sm transition"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
