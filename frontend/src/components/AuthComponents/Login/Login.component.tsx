import React from 'react';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Form, Input, SubmitButton, FormError } from '..';
import { Link } from 'react-router-dom';

interface LoginProps {
  onLogin: (email: string, password: string) => void;
  formError: {
    status: boolean;
    message: string;
  };
}

interface FormData {
  email: string;
  password: string;
}

const schema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().required('Password is required')
});

const LoginComponent: React.FC<LoginProps> = ({ onLogin, formError }) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data: FormData) => {
    onLogin(data.email, data.password);
  };

  return (
    <section
      id="login"
      className="flex justify-center items-center h-screen bg-green-500"
    >
      <Form onSubmit={handleSubmit(onSubmit)} title={'Entrar'}>
        <FormError formError={formError} />
        <div className="flex flex-col gap-5">
          <Input
            name="email"
            register={register}
            error={errors.email}
            labelText="Email"
          />
          <Input
            name="password"
            register={register}
            error={errors.password}
            labelText="Senha"
          />
        </div>
        <p>
          Não tem uma conta? <Link to={'/register'}>Cadastre-se</Link>
        </p>
        <SubmitButton value={'Entrar'} />
      </Form>
    </section>
  );
};

export { LoginComponent };
