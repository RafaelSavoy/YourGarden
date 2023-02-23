import React from 'react';
import { UseFormHandleSubmit } from 'react-hook-form';
import { FormTitle } from './FormTitle';

interface FormProps {
  children: React.ReactNode;
  onSubmit: any;
  title: string;
}

const Form = ({ children, onSubmit, title }: FormProps) => {
  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col gap-5 bg-white p-8 rounded-md shadow-md w-2/4 max-w-screen-lg"
    >
      <FormTitle text={title} />
      {children}
    </form>
  );
};

export { Form };
