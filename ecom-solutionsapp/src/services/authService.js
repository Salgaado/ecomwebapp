import axios from 'axios';

const API_URL = 'http://localhost:5000';

const login = async (username, password) => {
  const response = await axios.post(`${API_URL}/login`, { username, password });
  return response.data;
};

const createUser = async (userData, token) => {
  const response = await axios.post(`${API_URL}/admin/create-user`, userData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export default {
  login,
  createUser,
};
