import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { ToastContainer } from 'react-toastify';
import { handleError, handleSuccess } from '../utils/utils';

function Signup() {

    const [signupInfo, setSignupInfo] = useState({
        name: '',
        email: '',
        password: ''
    })

    const navigate = useNavigate();
    const handleChange = (e) => {
        const { name, value } = e.target;
        const copySignupInfo = { ...signupInfo };
        copySignupInfo[name] = value;
        setSignupInfo(copySignupInfo);
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        const { name, email, password } = signupInfo;
        if (!name || !email || !password) {
            return handleError('name, email and password are required')
        }
        try {
            const url = `http://localhost:8080/api/auth/signup`;
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(signupInfo)
            });
            const result = await response.json();
            const { success, message, error } = result;
            if (success) {
                handleSuccess(message);
                setTimeout(() => {
                    navigate('/login')
                }, 1000)
            } else if (error) {
                const details = error?.details[0].message;
                handleError(details);
            } else if (!success) {
                handleError(message);
            }
        } catch (err) {
            handleError(err);
        }
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-gray-100 px-4">
              <div className="bg-white rounded-2xl shadow-lg w-full max-w-md p-8 border-amber-500">
                <div className="text-center mb-6">
                  <h2 className="text-3xl font-semibold text-gray-800">
                    Sign Up
                  </h2>
                  <p className="text-sm text-gray-500">
                    Join us by creating your account.
                  </p>
                </div>
        
                <form onSubmit={onSubmitHandler} className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-gray-700">Full Name</label>
                      <input
                        type="text"
                        className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder="John Doe"
                        name="name"
                        value={signupInfo.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
        
                  <div>
                    <label className="text-sm font-medium text-gray-700">Email</label>
                    <input
                      type="email"
                      className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="you@example.com"
                      name="email"
                      value={signupInfo.email}
        
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
                      value={signupInfo.password}
        
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
                     Already have an account? 
                      <Link to="/login">Login</Link>
                    </span>
                  </div>
        
                  <button
                    type="submit"
                    className="w-full bg-orange-600 hover:bg-orange-400 text-white font-medium py-2 rounded-lg transition duration-300"
                  >
                  Sign Up
                  </button>
                </form>
                <ToastContainer />
              </div>
            </div>
    )
}

export default Signup