import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { url } from '../data/assets';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate()

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${url}/users/signup`, { name, email, password });
            navigate('/login')
            setError('')
            // Handle successful signup (e.g., redirect to login)
        } catch (err) {
            // setError('Signup failed. Please try again.');
            setError(err.response.data.message)
        }
    };

    return (
      <div className="w-5/12 mt-4 mx-auto bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-4">Signup</h2>
      <form onSubmit={handleSignup} className="flex flex-col space-y-4">
          <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button 
              type="submit" 
              className="bg-blue-500 text-white p-3 rounded hover:bg-blue-600 transition duration-200">
              Signup
          </button>
      </form>
      {error && <p className="text-red-500 text-center mt-4">{error}</p>}
  </div>
    );
};

export default Signup;
