// Step 1: Import Navigate instead of Redirect
import React from 'react';
import { Navigate } from 'react-router-dom'; // Use Navigate in v6

const ProtectedRoute = ({ userIsAuthenticated, children }) => {
  // Step 2: Use Navigate to handle redirection
  if (!userIsAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
