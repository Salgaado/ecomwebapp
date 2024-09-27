
import { Link } from 'react-router-dom';
import LogoutButton from '../components/LogoutButton'; // Importa o LogoutButton

const AdminDashboard = () => {
  return (
    <div>
      <h2>Painel do Administrador</h2>
      <nav>
        <ul>
          <li><Link to="/admin/create-user">Criar Usuário</Link></li>
          {/* Adicione outros links conforme necessário */}
        </ul>
      </nav>
      {/* Adiciona o botão de logout */}
      <LogoutButton />
    </div>
  );
};

export default AdminDashboard;

