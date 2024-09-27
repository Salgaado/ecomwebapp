
import LogoutButton from '../components/LogoutButton'; // Importa o LogoutButton

const UserDashboard = () => {
  return (
    <div>
      <h2>Painel do Usuário</h2>
      <p>Bem-vindo ao seu painel.</p>
      {/* Adiciona o botão de logout */}
      <LogoutButton />
    </div>
  );
};

export default UserDashboard;

