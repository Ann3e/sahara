import React, { useState } from 'react';
import { useNavigate,Link } from 'react-router';
import { ToastContainer } from 'react-toastify';
import { handleError, handleSuccess } from '../utils/utils';


const Login = () => {


    const navigate = useNavigate(); 

  const [formData,setFormData]= useState({
    name:'',
    email:'',
    password:''
  })

  // This connects the inputs to formData:
  const handleChange=(e)=>{
    const {name,value}=e.target;
    const copyformData ={...formData};//Makes a shallow copy of the current state object formData.
    copyformData[name]=value;
    setFormData(copyformData)
  } 
  const onSubmitHandler = async (event) => {
    event.preventDefault();
      const { name, email, password } = formData; 

    if (!email || !password ) {
    alert('Please fill all required fields');
    return;}

    const url= "https://sahara-backend-6fn6.onrender.com/api/auth/login";
    
    try {
      const payload ={ email, password };
      const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(payload),
    });

    const data = await res.json();
    const { success, message, jwtToken, name, error } = data;

    if(success){
      handleSuccess();
      localStorage.setItem('token', jwtToken);
      localStorage.setItem('loggedInUser', name);
      setTimeout(()=>{
        navigate('/home'); 
      }
    ,1000)
    }else if (error) {
                const details = error?.details[0].message;
                handleError(details);
    } else if (!success) {
                handleError(message);
            }

    // Clear form or redirect here
  } catch (error) {
    console.error('Error:', error);
    alert(error.message);
  }
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-gray-100 px-4">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-md p-8 border-amber-500">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-semibold text-gray-800">
            Login
          </h2>
          <p className="text-sm text-gray-500">
             Welcome back! Log in to your account.
          </p>
        </div>

        <form onSubmit={onSubmitHandler} className="space-y-4">
          

          <div>
            <label className="text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="you@example.com"
              name="email"
              value={formData.email}

              onChange={handleChange}

              required
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="••••••••"
              name="password"
              value={formData.password}

              onChange={handleChange}

              required
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600 cursor-pointer hover:underline">
              Forgot password?
            </span>
            <span
              className="text-green-600 hover:underline cursor-pointer"
              
              
            >
            <Link to='/signup'>Create Account</Link>
            </span>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-600 hover:bg-orange-400 text-white font-medium py-2 rounded-lg transition duration-300"
          >
            Sign In
          </button>
        </form>
                    <ToastContainer />
      </div>
    </div>
  );
};

export default Login;
