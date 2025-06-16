import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/api';

const QuestionDetails = () => {
  const { id } = useParams();
  const [question, setQuestion] = useState(null);

  useEffect(() => {
    const fetchQuestion = async () => {
      try {
        const res = await api.get(`/api/questions/${id}`);
        setQuestion(res.data);
      } catch (err) {
        console.error('Error fetching question', err);
      }
    };
    fetchQuestion();
  }, [id]);

  return question ? (
    <div className="p-6">
      <h2 className="text-2xl font-bold">{question.title}</h2>
      <p className="text-gray-700">Difficulty: {question.difficulty}</p>
      <p className="text-gray-700">Status: {question.status}</p>

      {question.voiceNote && (
        <audio controls src={`http://localhost:8080/${question.voiceNote}`} className="mt-4" />
      )}
    </div>
  ) : (
    <p>hi...</p>
  );
};

export default QuestionDetails;
