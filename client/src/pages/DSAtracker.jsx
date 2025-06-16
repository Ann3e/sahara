// import React, { useEffect, useState } from 'react';
// import { useNavigate,Link } from 'react-router'
// import Navbar from '../components/Navbar'
// import api from '../services/api';
// import QuesCard from '../components/QuesCard';

// const DSAtracker = () => {

//   const [questions, setQuestions] = useState([]);
//   const [showForm, setShowForm]= useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchQuestions = async () => {
//       try {
//         // console.log();
//         const res = await api.get('/api/dsa/questions');
//         setQuestions(res.data.data);
//         // console.log(res);
//       } catch (err) {
//         console.error('Failed to fetch questions:', err);
//       }
//     };

//     fetchQuestions();
//   }, []);

//   return (
//     <div className="p-6">
//       <Navbar/>
//       <h2 className="text-2xl font-bold mb-4">DSA Tracker</h2>

//       <button
//         onClick={() => setShowForm(true)}
//         className="bg-green-600 text-white px-4 py-2 rounded mb-4"
//       >
//         Add New Ques
//       </button>

//       {showForm && (
//         <div className="fixed inset-0 bg-opacity-20 backdrop-blur-sm flex items-center justify-center z-50">
//           <QuesCard
//             // onSuccess={handleAddQuestion}
//             onClose={() => setShowForm(false)}
//           />
//         </div>
//       )}
//       <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
//         {questions.map((q) => (
//            <div key={q._id} className="bg-white border border-gray-200 rounded-2xl shadow-sm p-5 flex flex-col justify-between transition hover:shadow-md">
//   <div>
//     <h3 className="text-xl font-semibold text-gray-800 mb-2">{q.title}</h3>

//     <p className="text-sm text-gray-600 mb-1">
//       <span className="font-medium text-gray-700">Link:</span>{' '}
//       <a
//         href={q.quesLink}
//         target="_blank"
//         rel="noopener noreferrer"
//         className="text-blue-600 hover:underline break-words"
//       >
//         {q.quesLink}
//       </a>
//     </p>

//     <p className="text-sm text-gray-700 mt-1">
//       <span className="font-medium">Status:</span>{' '}
//       <span
//         className={`inline-block px-2 py-0.5 rounded text-xs font-medium ${
//           q.status === 'Done'
//             ? 'bg-green-100 text-green-800'
//             : q.status === 'In Progress'
//             ? 'bg-yellow-100 text-yellow-800'
//             : 'bg-gray-200 text-gray-700'
//         }`}
//       >
//         {q.status}
//       </span>
//     </p>
//   </div>

//   <div className="mt-4 flex justify-between items-center">
//     <Link to={`/questions/${q._id}`}>
//       <button className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-1.5 rounded-lg text-sm transition">
//         View Details
//       </button>
//     </Link>
//   </div>
// </div>

//         ))}
//       </div>
//     </div>
//   );
// };

// export default DSAtracker;
// // import React, { useEffect, useState } from 'react';
// // import { useNavigate } from 'react-router';
// // import api from '../services/api';
// // import AddQuestionForm from '../components/AddQuestionForm';
// // import FilterBar from '../components/FilterBar';

// // const DSAtracker = () => {
// //   const [questions, setQuestions] = useState([]);
// //   const [filtered, setFiltered] = useState([]);
// //   const [filters, setFilters] = useState({ difficulty: '', status: '' });
// //   const navigate = useNavigate();

// //   // Fetch all questions on mount
// //   useEffect(() => {
// //     const fetchQuestions = async () => {
// //       try {
// //         const res = await api.get('/api/questions');
// //         setQuestions(res.data);
// //         setFiltered(res.data); // initialize filtered list
// //       } catch (err) {
// //         console.error('Failed to fetch questions:', err);
// //       }
// //     };

// //     fetchQuestions();
// //   }, []);

// //   // Add a new question
// //   const handleAddQuestion = (newQuestion) => {
// //     const updated = [...questions, newQuestion];
// //     setQuestions(updated);
// //     applyFilters(updated, filters);
// //   };

// //   // Handle filter change
// //   const handleFilterChange = (e) => {
// //     const updatedFilters = { ...filters, [e.target.name]: e.target.value };
// //     setFilters(updatedFilters);
// //     applyFilters(questions, updatedFilters);
// //   };

// //   // Filter questions based on difficulty and status
// //   const applyFilters = (data, filter) => {
// //     let result = data;
// //     if (filter.difficulty) {
// //       result = result.filter(q => q.difficulty === filter.difficulty);
// //     }
// //     if (filter.status) {
// //       result = result.filter(q => q.status === filter.status);
// //     }
// //     setFiltered(result);
// //   };

// //   return (
// //     <div className="p-6">
// //       <h2 className="text-2xl font-bold mb-4">DSA Tracker</h2>

// //       {/* Add New Question */}
// //       <AddQuestionForm onAdd={handleAddQuestion} />

// //       {/* Filter Bar */}
// //       <FilterBar filters={filters} onChange={handleFilterChange} />

// //       {/* List of Questions */}
// //       <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
// //         {filtered.map((q) => (
// //           <div key={q._id} className="bg-white shadow rounded-xl p-4 border border-gray-200">
// //             <h3 className="text-lg font-semibold">{q.title}</h3>
// //             <p className="text-sm text-gray-600">Difficulty: {q.difficulty}</p>
// //             <p className="text-sm text-gray-500">Status: {q.status}</p>
// //             <div className="mt-3">
// //               <button
// //                 onClick={() => navigate(`/questions/${q._id}`)}
// //                 className="text-white bg-blue-600 hover:bg-blue-500 px-3 py-1 rounded"
// //               >
// //                 View Details
// //               </button>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default DSAtracker;
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
