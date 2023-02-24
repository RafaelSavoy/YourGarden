import React, { useState } from 'react';
import { Product } from '../ProductCard';
import Modal from './Modal';

interface EditProductProps {
  isOpened: boolean;
  onClose: () => void;
  currentProduct: Product | null;
  updateProducts: () => void;
}

const EditProduct = ({
  isOpened,
  onClose,
  currentProduct,
  updateProducts
}: EditProductProps) => {
  return (
    <>
      {isOpened && (
        <Modal
          isOpen={isOpened}
          onClose={onClose}
          currentProduct={currentProduct}
          updateProducts={updateProducts}
        />
      )}
    </>
  );
};

export default EditProduct;
