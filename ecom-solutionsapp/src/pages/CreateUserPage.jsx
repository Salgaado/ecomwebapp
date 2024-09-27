import { useState } from 'react';
import axios from 'axios';

const CreateUserPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user'); // Valor padrão

  const [message, setMessage] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
      await axios.post(
        'http://localhost:5000/admin/create-user',
        { username, password, role },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setMessage('Usuário criado com sucesso!');
      setUsername('');
      setPassword('');
      setRole('user');
    } catch (error) {
      console.error('Erro ao criar usuário:', error);
      setMessage('Erro ao criar usuário.');
    }
  };

  return (
    <div>
      <h2>Criar Usuário</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Usuário:</label>
          <input type="text" value={username} onChange={e => setUsername(e.target.value)} required />
        </div>
        <div>
          <label>Senha:</label>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />
        </div>
        <div>
          <label>Papel:</label>
          <select value={role} onChange={e => setRole(e.target.value)}>
            <option value="user">Usuário Comum</option>
            <option value="admin">Administrador</option>
          </select>
        </div>
        <button type="submit">Criar</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default CreateUserPage;
