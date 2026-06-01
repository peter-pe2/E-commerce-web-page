// HomePage.jsx
import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import Plasma from './Plasma';
import './HomePage.css';

const HomePage = () => (
  <div className="homepage-container">
    <div className="plasma-background">
      <Plasma 
        color="#C7F6D0" 
        speed={1} 
        direction="forward" 
        scale={1} 
        opacity={0.3}
        mouseInteractive={true}
      />
    </div>
    <div className="homepage-content">
      <Navbar />
      <div className="homepage-main">
        <h1 className="homepage-title">
          Welcome to Our Store
        </h1>
        <p className="homepage-subtitle">
          Discover amazing products and find what you're looking for
        </p>
        <Link 
          to="/products" 
          className="shop-now-button"
        >
          Shop Now
        </Link>
      </div>
    </div>
  </div>
);

export default HomePage;
