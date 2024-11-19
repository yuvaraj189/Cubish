import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { UserContext } from './UserContext';
import Modal from './modal';

function Login() {
  const { login } = useContext(UserContext);
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setModalMessage('');

    try {
      const response = await axios.post('http://localhost:8080/login', formData);

      if (response.data.user) {
        const userName = response.data.user.name;
        login({ name: userName });
        setModalMessage(`Welcome, ${userName}! You have logged in successfully.`);
        setShowModal(true);

        setTimeout(() => {
          setShowModal(false);
          navigate('/plans');
        }, 2000);
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        // User not registered case
        setModalMessage('User not registered. Redirecting to registration page...');
        setShowModal(true);

        setTimeout(() => {
          setShowModal(false);
          navigate('/register'); // Redirect to the registration page
        }, 2000);
      } else {
        // Other errors (e.g., incorrect password or server error)
        setModalMessage('Invalid email or password. Please try again.');
        setShowModal(true);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">Login to Your Account</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-gray-600">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-600">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition duration-200"
          >
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        {showModal && <Modal message={modalMessage} onClose={() => setShowModal(false)} />}
      </div>
    </div>
  );
}

export default Login;
