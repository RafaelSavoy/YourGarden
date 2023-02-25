import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginComponent } from '../components/AuthComponents/Login/Login.component';
import { useUser } from '../contexts/UserContext';
import { authServices } from '../services/auth/authServices';

const Login = () => {
  const { updateUser } = useUser();
  const [formError, setFormError] = React.useState({
    status: false,
    message: ''
  });

  const navigate = useNavigate();

  async function onLogin(email: string, password: string) {
    try {
      const response = await authServices.login({ email, password });
      updateUser({ ...response.userData, logged: true }, response.token);
      navigate('/store');
    } catch (err: any) {
      const message = err.response
        ? err.response.data.msg
        : 'Erro ao se conectar com o servidor, contate um administrador.';
      setFormError({
        status: true,
        message
      });
    }
  }

  return <LoginComponent onLogin={onLogin} formError={formError} />;
};

export default Login;
