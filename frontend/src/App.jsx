import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import LoginPage from './login';
import AdminPage from './AdminPage/AdminPage';
import HomePage from './landing/home';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('auth') === 'true';
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  return isAuthenticated ? children : null;
};

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('auth') === 'true');

  useEffect(() => {
    const checkAuthStatus = () => {
      const auth = localStorage.getItem('auth');
      setIsLoggedIn(auth === 'true');
    };

    window.addEventListener('storage', checkAuthStatus);
    return () => window.removeEventListener('storage', checkAuthStatus);
  }, []);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route 
          path="/login" 
          element={
            isLoggedIn ? 
            <Navigate to="/admin/*" replace /> : 
            <LoginPage onLoginSuccess={handleLoginSuccess} />
          } 
        />
        <Route 
          path="/admin" 
          element={
            <ProtectedRoute>
              <AdminPage />
            </ProtectedRoute>
          } 
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;