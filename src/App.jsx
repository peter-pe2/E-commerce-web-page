// App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import { CartProvider } from './CartContext';
import HomePage from './HomePage'; 
import Products from './Slider'; 
import SupportPage from './SupportPage'; 
import CartPage from './CartPage'; 
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import ForgotPasswordPage from './ForgotPasswordPage';
import AccountPage from './AccountPage';
import PrivateRoute from './PrivateRoute';

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/home" element={<PrivateRoute element={<HomePage />} />} />
          <Route path="/products" element={<PrivateRoute element={<Products />} />} />
          <Route path="/support" element={<PrivateRoute element={<SupportPage />} />} />
          <Route path="/cart" element={<PrivateRoute element={<CartPage />} />} />
          <Route path="/account" element={<PrivateRoute element={<AccountPage />} />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;