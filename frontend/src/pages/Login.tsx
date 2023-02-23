import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginComponent } from '../components/AuthComponents/Login/LoginComponent';
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
      const { firstName, lastName } = response.userData;
      updateUser(firstName, lastName, response.token);
      navigate('/store');
    } catch (err: any) {
      setFormError({ status: true, message: err.response.data.msg });
    }
  }

  return (
    <div>
      <LoginComponent onLogin={onLogin} formError={formError} />
    </div>
  );
};

export default Login;
