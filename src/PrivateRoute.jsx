import React from 'react';
import { Navigate } from 'react-router-dom';
import { isLoggedIn } from './utils/auth';

const PrivateRoute = ({ element }) => {
  return isLoggedIn() ? element : <Navigate to="/" replace />;
};
export default PrivateRoute;

