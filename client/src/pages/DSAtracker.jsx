import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router';
import Navbar from '../components/Navbar';
import api from '../services/api';
import QuesCard from '../components/QuesCard';

const DSAtracker = () => {
  const [questions, setQuestions] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const res = await api.get('/api/dsa/questions');
        setQuestions(res.data.data);
      } catch (err) {
        console.error('Failed to fetch questions:', err);
      }
    };
    fetchQuestions();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-tr from-yellow-50 via-white to-orange-50 p-6">
      <Navbar />

      <div className="mt-15 max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <button
            onClick={() => setShowForm(true)}
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded-lg shadow-sm transition"
          >
            ➕ Add New Ques
          </button>
        </div>

        {showForm && (
          <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex items-center justify-center z-50">
            <QuesCard onClose={() => setShowForm(false)} />
          </div>
        )}

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {questions.map((q) => (
            <div
              key={q._id}
              className="bg-white border border-yellow-100 rounded-2xl shadow-md p-5 hover:shadow-lg transition duration-200 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-semibold text-blue-800 mb-2">{q.title}</h3>

                <p className="text-sm text-gray-700 mb-1">
                  <span className="font-medium text-gray-900">🔗 Link:</span>{' '}
                  <a
                    href={q.quesLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline break-all"
                  >
                    {q.quesLink}
                  </a>
                </p>

                <p className="text-sm mt-2">
                  <span className="font-medium text-gray-900">📌 Status:</span>{' '}
                  <span
                    className={`inline-block px-2 py-0.5 rounded-full text-xs font-semibold ${
                      q.status === 'Done'
                        ? 'bg-green-100 text-green-700'
                        : q.status === 'In Progress'
                        ? 'bg-yellow-200 text-yellow-800'
                        : 'bg-gray-200 text-gray-700'
                    }`}
                  >
                    {q.status}
                  </span>
                </p>
              </div>

              <div className="mt-4 flex justify-end">
                <Link to={`/questions/${q._id}`}>
                  <button className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-1.5 rounded-lg text-sm transition">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DSAtracker;
