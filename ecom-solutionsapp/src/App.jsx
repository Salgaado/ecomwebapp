import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import AdminDashboard from './pages/AdminDashboard';
import AdminPage from './pages/AdminPage'; // Novo componente
import Dashboard from './pages/Dashboard';
import UserDashboard from './pages/UserDashboard';
import CreateUserPage from './pages/CreateUserPage';
import NotAuthorizedPage from './pages/NotAuthorizedPage';
import ProtectedRoute from './components/ProtectedRoute';
import Navbar from './components/Navbar'; // Se você tiver um Navbar
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
      <Navbar /> {/* Se você tiver um Navbar */}
      <Routes>
        <Route path="/login" element={<LoginPage />} />

        {/* Rota protegida para o Dashboard (acessível a todos os usuários autenticados) */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* Rotas protegidas para Administradores */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute role="admin">
              <AdminPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute role="admin">
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/create-user"
          element={
            <ProtectedRoute role="admin">
              <CreateUserPage />
            </ProtectedRoute>
          }
        />

        {/* Rotas protegidas para Usuários Comuns */}
        <Route
          path="/user"
          element={
            <ProtectedRoute role="user">
              <UserDashboard />
            </ProtectedRoute>
          }
        />

        {/* Página para acesso não autorizado */}
        <Route path="/unauthorized" element={<NotAuthorizedPage />} />

        {/* Redirecionar qualquer outra rota para o login */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
      <ToastContainer />
    </Router>
  );
}

export default App;
