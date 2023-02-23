import React from 'react';

interface TitleProps {
  text: string;
}

const Title = ({ text }: TitleProps) => {
  return <h1 className='text-green-500 text-3xl text-center m-5'>{text}</h1>;
};

export { Title };
