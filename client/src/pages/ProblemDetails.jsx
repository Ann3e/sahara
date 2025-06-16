import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import api from '../services/api';

const ProblemDetails = () => {
  const { id } = useParams();
  const [problem, setProblem] = useState(null);

  useEffect(() => {
    const fetchProblem = async () => {
      try {
        const res = await api.get(`/api/dsa/questions/${id}`);
        setProblem(res.data.data);
      } catch (err) {
        console.error('Error fetching problem:', err);
      }
    };
    fetchProblem();
  }, [id]);

  if (!problem) return <div>Loading...</div>;

  return (
    <div className="p-8">
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h1 className="text-2xl font-bold">{problem.title}</h1>
        <a href={problem.quesLink} target="_blank" className="text-purple-600">View Problem ↗</a>
        <div className="mt-2">
          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm">
            {problem.status}
          </span>
        </div>
      </div>

      {/* Notes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white shadow p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Notes</h2>
          <p className="text-gray-600 text-sm mb-2">Write down your approach, solution, and key insights</p>
          <textarea 
            className="w-full border rounded-md p-2"
            rows={6}
            defaultValue={problem.notes}
          />
          <button className="mt-2 px-4 py-2 bg-purple-600 text-white rounded">Save Notes</button>
        </div>

        {/* Voice Explanations Placeholder */}
        <div className="bg-white shadow p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Voice Explanations</h2>
          <div className="border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center p-6">
            <button className="text-red-500 text-3xl">
              🎤
            </button>
            <p className="text-sm text-gray-500 mt-2 text-center">
              Click the microphone to start recording your explanation
            </p>
          </div>

          <h3 className="mt-4 font-semibold text-sm mb-2">Previous Recordings</h3>
          <ul className="space-y-2 text-sm">
            {problem.voiceRecordings?.map((rec, i) => (
              <li key={i} className="flex justify-between">
                <span>{rec.date}</span>
                <button className="text-blue-500 hover:underline">Play</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProblemDetails;
