import React from 'react';

interface SubmitButtonProps {
  value: string;
}

const SubmitButton = ({ value }: SubmitButtonProps) => {
  return (
    <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md w-full">
      {value}
    </button>
  );
};

export { SubmitButton };
