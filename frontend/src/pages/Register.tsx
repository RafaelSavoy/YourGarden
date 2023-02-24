import React from 'react';
import { useNavigate } from 'react-router-dom';
import { RegisterComponent } from '../components/AuthComponents/Register/Register.component';
import { useUser } from '../contexts/UserContext';
import { authServices } from '../services/auth/authServices';

interface RegisterRequestProps {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const Register = () => {
  const [formError, setFormError] = React.useState({
    status: false,
    message: ''
  });
  const { updateUser } = useUser();
  const navigate = useNavigate();

  async function onRegister(formData: RegisterRequestProps) {
    try {
      const response = await authServices.register(formData);
      updateUser({ ...response.userData, logged: true }, response.token);
      navigate('/community');
    } catch (err: any) {
      const message = err.response
        ? err.response.data.message
        : 'Erro ao se conectar com o servidor, contate um administrador.';
      setFormError({
        status: true,
        message
      });
    }
  }
  return <RegisterComponent onRegister={onRegister} formError={formError} />;
};

export default Register;
