import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import jwt_decode from 'jwt-decode'; // Importando jwt-decode
import { API_URL } from '../api';
import { useState } from 'react';

const LoginPage = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');

  const initialValues = {
    username: '',
    password: '',
  };

  const LoginSchema = Yup.object().shape({
    username: Yup.string().required('Usuário é obrigatório'),
    password: Yup.string().required('Senha é obrigatória'),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await axios.post(`${API_URL}/login`, values);
      const { access_token } = response.data;
      localStorage.setItem('access_token', access_token);

      // Decodificar o token JWT para obter o 'role' usando jwt-decode
      let userRole = null;
      try {
        const decodedToken = jwt_decode(access_token);
        userRole = decodedToken.role;
      } catch (decodeError) {
        console.error('Erro ao decodificar o token JWT:', decodeError);
        setErrorMessage('Erro ao processar as informações de autenticação.');
        return;
      }

      if (userRole === 'admin') {
        navigate('/admin');
      } else {
        navigate('/user');
      }
    } catch (err) {
      console.error('Erro ao fazer login:', err);
      if (err.response && err.response.status === 401) {
        setErrorMessage('Credenciais inválidas');
      } else {
        setErrorMessage('Erro ao conectar com o servidor');
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={LoginSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
            <div>
              <label>Usuário:</label>
              <Field type="text" name="username" />
              <ErrorMessage name="username" component="div" style={{ color: 'red' }} />
            </div>
            <div>
              <label>Senha:</label>
              <Field type="password" name="password" />
              <ErrorMessage name="password" component="div" style={{ color: 'red' }} />
            </div>
            <button type="submit" disabled={isSubmitting}>
              Entrar
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginPage;
