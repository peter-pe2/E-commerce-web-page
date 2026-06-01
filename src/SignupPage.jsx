import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './LoginPage.css'; // Reusing LoginPage styles

const SignupPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      setError('Please fill in all fields.');
      return;
    }
    setError('');
    // Fake login/signup
    import('./utils/auth').then(({ login }) => {
      const userData = {
        fullName: name,
        email: email,
        phone: '+1 (555) 000-0000',
        location: 'New York, NY',
        password: password,
      };
      login(userData);
      navigate('/home');
    });
  };

  return (
    <div className="login-page">
      <div className="login-wrapper">
        <div className="login-card">
          <h1 className="login-title">Create Account</h1>
          <p className="login-subtitle">Sign up to get started</p>

          <form className="login-form" onSubmit={handleSubmit}>
            <label className="login-label">
              Full Name
              <input
                type="text"
                className="login-input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="John Doe"
              />
            </label>

            <label className="login-label">
              Email
              <input
                type="email"
                className="login-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
              />
            </label>

            <label className="login-label">
              Password
              <input
                type="password"
                className="login-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
              />
            </label>

            {error && <div className="login-error">{error}</div>}

            <button type="submit" className="login-button">
              Sign Up
            </button>
          </form>

          <p className="login-footer-text">
            Already have an account?{' '}
            <Link to="/" className="login-link">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
