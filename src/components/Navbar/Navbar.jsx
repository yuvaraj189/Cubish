import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../assets/images/Logo.png';
import { UserContext } from '../Login/UserContext';  // Import named UserContext


const Navbar = () => {
  const { user, logout } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <div className="h-16 flex items-center justify-between px-4 shadow-lg bg-white">
      {/* Logo - always on the left side */}
      <Link to="/">
        <img src={Logo} alt="Logo" className="h-45 w-auto cursor-pointer" />
      </Link>

      {/* Right side items */}
      <div className="flex items-center space-x-8 ml-auto">
        {user ? (
          <>
            <span className="text-blue-600 text-lg font-semibold">
              Welcome, {user.name}!
            </span>
            {/* Logout button - visible only when the user is logged in */}
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-1 rounded-md font-semibold transition duration-200 hover:bg-red-600 focus:outline-none"
            >
              Logout
            </button>
            
          </>
        ) : (
          <>
            <Link to="/login" className="text-gray-700 font-semibold hover:text-blue-500 transition">Login</Link>
            <Link to="/register" className="text-gray-700 font-semibold hover:text-blue-500 transition">Register</Link>
          </>
        )}
        {/* Other links */}
        <Link to="/about" className="text-gray-700 font-semibold hover:text-blue-500 transition">About</Link>
        <Link to="/plans" className="text-gray-700 font-semibold hover:text-blue-500 transition">Plans</Link>
        <button className="text-gray-700 font-semibold hover:text-blue-500 transition">MyShield</button>
      </div>
    </div>
  );
};

export default Navbar;
