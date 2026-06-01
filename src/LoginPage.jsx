import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isGuestLoading, setIsGuestLoading] = useState(false);
  
  const navigate = useNavigate();

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }
    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    
    setError('');
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      import('./utils/auth').then(({ login }) => {
        // Mock user data extraction
        const userData = {
          fullName: 'Demo User',
          email: email,
          phone: '+1 (555) 000-0000',
          location: 'New York, NY',
          password: password,
        };
        login(userData);
        setIsLoading(false);
        navigate('/home');
      });
    }, 1000);
  };

  const handleGuestLogin = () => {
    setIsGuestLoading(true);
    setTimeout(() => {
      import('./utils/auth').then(({ loginAsGuest }) => {
        loginAsGuest();
        setIsGuestLoading(false);
        navigate('/home');
      });
    }, 800);
  };

  return (
    <div className="login-page">
      <div className="login-wrapper">
        <div className="login-card">
          <h1 className="login-title">Welcome Back</h1>
          <p className="login-subtitle">Sign in to continue to your account</p>

          <form className="login-form" onSubmit={handleSubmit}>
            <label className="login-label">
              Email
              <input
                type="email"
                className="login-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                disabled={isLoading || isGuestLoading}
              />
            </label>

            <label className="login-label">
              Password
              <div className="login-password-wrapper">
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="login-input"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  disabled={isLoading || isGuestLoading}
                />
                <button
                  type="button"
                  className="login-password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                  tabIndex="-1"
                >
                  {showPassword ? '👁️' : '👁️‍🗨️'}
                </button>
              </div>
            </label>

            <div className="login-options">
              <label className="login-checkbox-label">
                <input
                  type="checkbox"
                  className="login-checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  disabled={isLoading || isGuestLoading}
                />
                Remember me
              </label>
              <Link to="/forgot-password" className="login-forgot-link">
                Forgot password?
              </Link>
            </div>

            {error && <div className="login-error">{error}</div>}

            <button 
              type="submit" 
              className="login-button" 
              disabled={isLoading || isGuestLoading}
              style={{ opacity: (isLoading || isGuestLoading) ? 0.7 : 1 }}
            >
              {isLoading ? 'Logging in...' : 'Log In'}
            </button>
          </form>
          
          <button
            type="button"
            className="login-button"
            style={{ 
              marginTop: 8, 
              background: '#444', 
              color: '#fff',
              opacity: (isLoading || isGuestLoading) ? 0.7 : 1 
            }}
            onClick={handleGuestLogin}
            disabled={isLoading || isGuestLoading}
          >
            {isGuestLoading ? 'Loading...' : 'Continue as Guest'}
          </button>

          <p className="login-footer-text">
            Don&apos;t have an account?{' '}
            <Link to="/signup" className="login-link">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;