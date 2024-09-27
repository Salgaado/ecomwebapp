import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
  const history = useNavigate();

  const handleLogout = () => {
    // Remove o token e o papel do usuário do localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    // Redireciona para a página de login
    history.push('/login');
  };

  return <button onClick={handleLogout}>Sair</button>;
};

export default LogoutButton;