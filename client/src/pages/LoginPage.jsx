import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { url } from '../data/assets';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate()

  const handleLogin = async (e) => {
      e.preventDefault();
      try {
          const response = await axios.post(`${url}/users/login`, { email, password });
          localStorage.setItem('token', response.data.token); 
          console.log(response.data.user)
          navigate('/')
          window.location.reload()
          window.scrollTo(0, 0)
          console.log('Login successful:', response.data);
          // Handle successful login (e.g., redirect, store token, etc.)
      } catch (err) {
          setError(err.response?.data.message);
      }
  };

  return (
      <div className='w-5/12 mt-4 mx-auto bg-white p-6 rounded-lg shadow-lg'>
          <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
          <form onSubmit={handleLogin} className="flex flex-col space-y-4">
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
              <button type="submit"
              className="bg-blue-500 text-white p-3 rounded hover:bg-blue-600 transition duration-200">Login</button>
          </form>
          {error && <p className="text-red-500 text-center mt-4" style={{ color: 'red' }}>{error}</p>}
      </div>
  )
}

export default LoginPage
