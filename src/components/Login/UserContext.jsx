// UserContext.jsx
import React, { createContext, useState, useContext } from 'react';

// Create the context
export const UserContext = createContext(); // Named export for UserContext

// UserProvider component to provide user state
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // null means user is not logged in

  const login = (userData) => setUser(userData); // Example login function
  const logout = () => setUser(null); // Example logout function

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to access user context
export const useUserContext = () => useContext(UserContext); // Named export for useUserContext
