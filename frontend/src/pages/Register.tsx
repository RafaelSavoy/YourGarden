import React from 'react';
import { RegisterComponent } from '../components/AuthComponents/Register/RegisterComponent';

const Register = () => {
  const [formError, setFormError] = React.useState({
    status: false,
    message: ''
  });
  function onRegister(
    firstName: string,
    lastName: string,
    email: string,
    password: string
  ) {}
  return (
    <div>
      <RegisterComponent onRegister={onRegister} formError={formError} />
    </div>
  );
};

export default Register;
