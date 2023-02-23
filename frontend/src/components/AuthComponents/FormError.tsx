import React from 'react';

interface FormErrorProps {
  formError: {
    status: boolean;
    message: string;
  };
}

const FormError = ({ formError }: FormErrorProps) => {
  return (
    <>
      {formError.status && <p className="text-red-500 text-center">{formError.message}</p>}
    </>
  );
};

export {FormError};
