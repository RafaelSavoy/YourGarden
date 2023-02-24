import { FieldError, UseFormRegister } from 'react-hook-form';

interface InputProps {
  error: FieldError | undefined;
  register: any;
  name: string;
  labelText: string;
  type?: string;
}

function Input({ error, register, name, labelText, type }: InputProps) {
  return (
    <div>
      <label htmlFor={name} className="block font-medium">
        {labelText}
      </label>
      <input
        type={type || 'text'}
        className={`border border-gray-300 p-2 rounded-md w-full ${
          error ? 'border-red-500' : ''
        }`}
        {...register(name, { required: true })}
      />
      {error && <span className="text-red-500">{error.message}</span>}
    </div>
  );
}

export { Input };
