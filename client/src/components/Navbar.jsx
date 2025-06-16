// import React, { useEffect, useState } from 'react';
// import { useNavigate,Link } from 'react-router';

// const Navbar = () => {
//   const navigate = useNavigate();
//   const [user, setUser] = useState('');

//   useEffect(() => {
//     const name = localStorage.getItem('loggedInUser');
//     if (!name) {
//       navigate('/login');
//     } else {
//       setUser(name);
//     }
//   }, [navigate]);

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     localStorage.removeItem('loggedInUser');
//     navigate('/login');
//   };

//   return (
//     <div >
      
//         {/* <button
//           onClick={handleLogout}
//           className="bg-red-500 hover:bg-red-400 text-white px-6 py-2 rounded-lg transition"
//         >
//           Logout
//         </button> */}

//         <nav className="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200">
//       <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//         <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
//           <span className="self-center text-2xl font-semibold whitespace-nowrap text-orange-600">sahara</span>
//         </a>

//          <Link to="/dsaTracker"> <div>DSA Tracker</div> </Link> 
//          <Link to="/interviewPrep"> <div>Mock Interview</div></Link> 
//         <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
//             <button
//               type="button"
//               onClick={handleLogout}
         
//               className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 
//                          font-medium rounded-lg text-sm px-4 py-2 text-center 
//                          dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//             >
//               Logout
//             </button>

         

//         </div>
//       </div>
//     </nav>

//     </div>
//   );
// };

// export default Navbar;
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
