import { Navigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import PropTypes from 'prop-types';

const ProtectedRoute = ({ children, role }) => {
  const token = localStorage.getItem('access_token');

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  let userRole;
  try {
    const decodedToken = jwt_decode(token);
    userRole = decodedToken.role;

    // Verificar se o token está expirado
    const currentTime = Date.now() / 1000; // em segundos
    if (decodedToken.exp && decodedToken.exp < currentTime) {
      // Token expirado
      localStorage.removeItem('access_token');
      return <Navigate to="/login" replace />;
    }
  } catch (error) {
    console.error('Token inválido:', error);
    localStorage.removeItem('access_token');
    return <Navigate to="/login" replace />;
  }

  if (role && role !== userRole) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
};

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
  role: PropTypes.string
};

export default ProtectedRoute;
