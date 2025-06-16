// import React, { useState } from 'react';
// import Navbar from '../components/Navbar';

// const InterviewPrep = () => {
//   const [question, setQuestion] = useState('');
//   const [answer, setAnswer] = useState('');
//   const [feedback, setFeedback] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleGenerateQuestion = async () => {
//     // TODO: Replace with Gemini API call
//     setQuestion("Tell me about a challenging coding problem you solved.");
//   };

//   const handleSubmit = async () => {
//     setLoading(true);
//     try {
//       // TODO: Call Gemini API here
//       // const res = await api.post('/api/interview/feedback', { question, answer });
//       // setFeedback(res.data.feedback);
//       setTimeout(() => {
//         setFeedback("Great answer! You structured your thoughts well. Try giving a more concrete example next time.");
//         setLoading(false);
//       }, 1000);
//     } catch (err) {
//       console.error(err);
//       setFeedback("Failed to get feedback.");
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="p-6 max-w-4xl mx-auto">
//       <Navbar />
//       <h1 className="text-3xl font-bold mb-4 text-orange-600">🎤 Mock Interview</h1>

//       <button
//         onClick={handleGenerateQuestion}
//         className="bg-blue-600 text-white px-4 py-2 rounded mb-6 hover:bg-blue-500 transition"
//       >
//         Generate Question
//       </button>

//       {question && (
//         <div className="mb-4 bg-yellow-50 p-4 rounded shadow">
//           <p className="font-semibold text-gray-800">Interviewer:</p>
//           <p className="text-gray-700 mt-1">{question}</p>
//         </div>
//       )}

//       {question && (
//         <textarea
//           value={answer}
//           onChange={(e) => setAnswer(e.target.value)}
//           rows={5}
//           className="w-full p-3 border border-gray-300 rounded mb-4"
//           placeholder="Type your response here..."
//         />
//       )}

//       {question && (
//         <button
//           onClick={handleSubmit}
//           className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-500"
//           disabled={loading}
//         >
//           {loading ? 'Analyzing...' : 'Submit Answer'}
//         </button>
//       )}

//       {feedback && (
//         <div className="mt-6 bg-white p-4 border rounded shadow">
//           <h2 className="font-bold text-purple-700 mb-2">🧠 Feedback:</h2>
//           <p className="text-gray-800">{feedback}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default InterviewPrep;

import React, { useState } from 'react';
import { Mic, RefreshCcw, Send } from 'lucide-react';
import Navbar from '../components/Navbar';

const InterviewPrep = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [feedback, setFeedback] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerateQuestion = async () => {
    // TODO: Replace with Gemini API call
    setQuestion("💬 Tell me about a time you optimized an algorithm for performance.");
    setAnswer('');
    setFeedback('');
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      // TODO: Replace with Gemini feedback
      setTimeout(() => {
        setFeedback("✅ Good structure. Try to include Big O notation and measurable impact.");
        setLoading(false);
      }, 1500);
    } catch (err) {
      console.error(err);
      setFeedback("❌ Failed to get feedback.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-orange-50">
      <Navbar />
      <div className="mt-20 max-w-5xl mx-auto px-4 py-8">
        <div className="bg-white shadow-md rounded-2xl p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-orange-600">Mock Interview 🎤</h1>
            <button
              onClick={handleGenerateQuestion}
              className="flex items-center gap-2 text-sm bg-yellow-500 text-white px-4 py-2 rounded-lg shadow hover:bg-yellow-600 transition"
            >
              <RefreshCcw size={16} />
              New Question
            </button>
          </div>

          {question ? (
            <div className="bg-orange-100 p-4 rounded-xl mb-6">
              <p className="font-medium text-orange-900">{question}</p>
            </div>
          ) : (
            <p className="text-gray-500 mb-4">Click "New Question" to begin your mock interview.</p>
          )}

          {question && (
            <div className="mb-6">
              <textarea
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                placeholder="Type your answer or use voice input..."
                className="w-full h-40 p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 resize-none"
              />
              <div className="flex justify-between mt-3">
                <button
                  className="flex items-center gap-2 text-orange-600 hover:text-orange-800 text-sm"
                  onClick={() => alert("🎙️ Voice input coming soon!")}
                >
                  <Mic size={18} />
                  Use Voice
                </button>

                <button
                  onClick={handleSubmit}
                  disabled={loading}
                  className={`flex items-center gap-2 text-sm text-white px-4 py-2 rounded-lg transition ${
                    loading ? 'bg-gray-400' : 'bg-green-600 hover:bg-green-700'
                  }`}
                >
                  <Send size={16} />
                  {loading ? 'Analyzing...' : 'Submit Answer'}
                </button>
              </div>
            </div>
          )}

          {feedback && (
            <div className="bg-white border-l-4 border-purple-500 shadow p-4 rounded-md">
              <h3 className="font-semibold text-purple-700 mb-1">AI Feedback</h3>
              <p className="text-gray-700">{feedback}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InterviewPrep;
