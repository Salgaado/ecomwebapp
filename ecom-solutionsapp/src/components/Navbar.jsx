
import { Link } from 'react-router-dom';
import LogoutButton from './LogoutButton'; // Importa o LogoutButton

const Navbar = () => {
  const userRole = localStorage.getItem('role');

  return (
    <nav>
      <ul>
        {userRole === 'admin' && (
          <>
            <li><Link to="/admin">Dashboard Admin</Link></li>
            <li><Link to="/admin/create-user">Criar Usuário</Link></li>
          </>
        )}
        {userRole === 'user' && (
          <li><Link to="/user">Dashboard Usuário</Link></li>
        )}
        {/* Adiciona o botão de logout */}
        <li><LogoutButton /></li>
      </ul>
    </nav>
  );
};

export default Navbar;
