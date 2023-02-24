import React from 'react';
import Modal from './Modal';

interface AddProductModalProps {
  updateProducts: () => void;
}

const AddProducts = ({ updateProducts }: AddProductModalProps) => {
  const [show, setShow] = React.useState(false);
  return (
    <div className="w-full flex justify-center my-5">
      <button
        className="bg-green-400 rounded p-2 text-white"
        onClick={() => {
          setShow((show) => !show);
        }}
      >
        Adicionar produtos
      </button>
      <Modal
        isOpen={show}
        onClose={() => setShow(false)}
        updateProducts={updateProducts}
      />
    </div>
  );
};

export default AddProducts;
