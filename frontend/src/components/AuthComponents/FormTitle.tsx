import React from 'react';

interface FormTitleProps {
    text: string;
}

const FormTitle = ({text}: FormTitleProps) => {
return <h1 className="text-green-700 text-3xl text-center">{text}</h1>;
};

export { FormTitle };
