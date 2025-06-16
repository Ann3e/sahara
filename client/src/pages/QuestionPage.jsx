
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import api from '../services/api';
import VoiceExplanations from '../components/VoiceExplantions';
import Navbar from '../components/Navbar';

const QuestionPage = () => {
  const { id } = useParams();
  const [question, setQuestion] = useState(null);
  const [notes, setNotes] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuestion = async () => {
      try {
        const res = await api.get(`/api/dsa/questions/${id}`);
        setQuestion(res.data.ques);
        setNotes(res.data.ques.notes || '');
        setLoading(false);
      } catch (err) {
        console.error('Error fetching question:', err);
        setError('Failed to load question.');
        setLoading(false);
      }
    };
    fetchQuestion();
  }, [id]);

  const handleSaveNotes = async () => {
    try {
      await api.put(`/api/dsa/questions/${id}`, { notes });
      alert('Notes saved!');
    } catch (err) {
      console.error('Failed to save notes:', err);
      alert('Error saving notes.');
    }
  };

  if (loading) return <div className="p-4">Loading...</div>;
  if (error) return <div className="text-red-500 p-4">{error}</div>;

  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto p-6 mt-20">
        <h1 className="text-3xl font-bold text-orange-600 mb-2">{question.title}</h1>
        <p className="text-gray-600 mb-1"><strong>Topic:</strong> {question.topic}</p>
        <p className="text-gray-700 mb-3">
          <strong>Status:</strong> {question.status}
        </p>
        {question.quesLink && (
          <p className="mb-6">
            <a
              href={question.quesLink}
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 underline hover:text-blue-800"
            >
              🔗 Leetcode Link
            </a>
          </p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Notes Section */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold mb-2 text-purple-700">📝 Notes</h2>
            <p className="text-sm text-gray-500 mb-3">
              Write down your approach, solution steps, or observations:
            </p>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="E.g. Used sliding window for optimized solution..."
              className="w-full p-3 h-40 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <button
              onClick={handleSaveNotes}
              className="mt-3 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition"
            >
              💾 Save Notes
            </button>
          </div>

          {/* Voice Explanations */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold mb-3 text-orange-600">🎤 Voice Explanation</h2>
            <VoiceExplanations />
          </div>
        </div>
      </div>
    </>
  );
};

export default QuestionPage;
