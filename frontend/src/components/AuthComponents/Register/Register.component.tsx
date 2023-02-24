import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Form, Input, SubmitButton, FormError } from '..';
import { Link } from 'react-router-dom';

interface RegisterProps {
  onRegister: (formData: FormData) => void;
  formError: {
    status: boolean;
    message: string;
  };
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const schema = yup.object().shape({
  firstName: yup.string().required('Primeiro nome é obrigatório'),
  lastName: yup.string().required('Ultimo nome é obrigatório'),
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().required('Password is required')
});

const RegisterComponent: React.FC<RegisterProps> = ({
  onRegister,
  formError
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data: FormData) => {
    onRegister(data);
  };

  return (
    <section className="flex justify-center items-center h-screen bg-green-500">
      <Form onSubmit={handleSubmit(onSubmit)} title={'Cadastre-se'}>
        <div className="flex flex-col">
          <FormError formError={formError} />
          <Input
            name="firstName"
            register={register}
            error={errors.firstName}
            labelText="Primeiro Nome"
          />
          <Input
            name="lastName"
            register={register}
            error={errors.lastName}
            labelText="Ultimo Nome"
          />
          <Input
            name="email"
            register={register}
            error={errors.email}
            labelText="Email"
          />
          <Input
            name="password"
            type="password"
            register={register}
            error={errors.password}
            labelText="Senha"
          />
        </div>
        <div>
          <p>
            Já tem uma conta? <Link to={'/login'}>Entrar</Link>
          </p>
        </div>
        <SubmitButton value={'Cadastrar'} />
      </Form>
    </section>
  );
};

export { RegisterComponent };
