import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import './AccountPage.css';
import { logout, getUserData, updateUserData } from './utils/auth';

const AccountPage = () => {
  const navigate = useNavigate();
  
  const [userData, setUserData] = useState({
    fullName: 'Guest User',
    email: 'guest@example.com',
    phone: 'Not provided',
    location: 'Not provided',
    password: 'password123',
    twoFactor: 'Disabled'
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({});

  useEffect(() => {
    const data = getUserData();
    if (data) {
      setUserData({ ...userData, ...data });
    }
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleEditToggle = () => {
    if (isEditing) {
      // Save changes
      setUserData(editData);
      updateUserData(editData);
    } else {
      // Start editing
      setEditData(userData);
    }
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  };

  return (
    <div className="account-page-container">
      <Navbar />

      <div className="account-wrapper">
        <h1 className="account-header">Your Account</h1>
        <p className="account-subtitle">Manage your profile information and settings.</p>

        <div className="account-section">
          <h2 className="account-section-title">Personal Information</h2>
          <div className="account-grid">
            <div className="account-field">
              <span className="account-label">Full Name</span>
              {isEditing ? (
                <input className="account-input" name="fullName" value={editData.fullName || ''} onChange={handleChange} />
              ) : (
                <div className="account-value">{userData.fullName}</div>
              )}
            </div>
            <div className="account-field">
              <span className="account-label">Email Address</span>
              {isEditing ? (
                <input className="account-input" type="email" name="email" value={editData.email || ''} onChange={handleChange} />
              ) : (
                <div className="account-value">{userData.email}</div>
              )}
            </div>
            <div className="account-field">
              <span className="account-label">Phone Number</span>
              {isEditing ? (
                <input className="account-input" name="phone" value={editData.phone || ''} onChange={handleChange} />
              ) : (
                <div className="account-value">{userData.phone}</div>
              )}
            </div>
            <div className="account-field">
              <span className="account-label">Location</span>
              {isEditing ? (
                <input className="account-input" name="location" value={editData.location || ''} onChange={handleChange} />
              ) : (
                <div className="account-value">{userData.location}</div>
              )}
            </div>
          </div>
          <button className="account-button" onClick={handleEditToggle}>
            {isEditing ? 'Save Changes' : 'Edit Profile'}
          </button>
        </div>

        <div className="account-section">
          <h2 className="account-section-title">Security & Settings</h2>
          <div className="account-grid">
            <div className="account-field">
              <span className="account-label">Password</span>
              {isEditing ? (
                <input className="account-input" type="password" name="password" value={editData.password || ''} onChange={handleChange} />
              ) : (
                <div className="account-value">{'•'.repeat(Math.max(8, (userData.password || '').length))}</div>
              )}
            </div>
            <div className="account-field">
              <span className="account-label">Two-Factor Auth</span>
              {isEditing ? (
                <select className="account-input" name="twoFactor" value={editData.twoFactor || 'Disabled'} onChange={handleChange}>
                  <option value="Enabled">Enabled</option>
                  <option value="Disabled">Disabled</option>
                </select>
              ) : (
                <div className="account-value">{userData.twoFactor || 'Disabled'}</div>
              )}
            </div>
          </div>
        </div>

        <div className="account-actions">
          <button className="account-button danger" onClick={handleLogout}>Log Out</button>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
