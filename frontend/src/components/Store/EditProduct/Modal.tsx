import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { useUser } from '../../../contexts/UserContext';
import { productServices } from '../../../services/products/productService';
import { FormError } from '../../AuthComponents';
import { Product } from '../ProductCard';
import { Input } from './Input';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentProduct: Product | null;
  updateProducts: () => void;
}

interface FormData {
  name: string;
  price: number;
}

const productSchema = yup.object().shape({
  name: yup.string().required('Digite um nome válido'),
  price: yup.number().required('Digite um preço válido')
});

const Modal = ({
  isOpen,
  onClose,
  currentProduct,
  updateProducts
}: ModalProps) => {
  const { user, getUserToken } = useUser();
  const [modalMessage, setModalMessage] = useState({
    status: false,
    message: ''
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue
  } = useForm<FormData>({
    resolver: yupResolver(productSchema)
  });

  useEffect(() => {
    setValue('name', currentProduct?.name!);
    setValue('price', currentProduct?.price!);
  }, []);

  async function editProduct(data: FormData) {
    try {
      const token = getUserToken();
      await productServices.editProduct(
        { id: currentProduct?.id!, ...data },
        token || ''
      );
      setModalMessage({
        status: true,
        message: 'Produto editado com sucesso!'
      });
    } catch (e) {
      setModalMessage({ status: true, message: 'Erro' });
    } finally {
      updateProducts();
    }
  }
  async function deleteProduct() {
    try {
      const token = getUserToken();
      await productServices.deleteProduct(currentProduct?.id!, token || '');
      onClose();
    } catch (e) {
      setModalMessage({ status: true, message: 'Erro ao deletar produto' });
    } finally {
      updateProducts();
    }
  }

  return (
    <>
      {isOpen ? (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-4 rounded-md shadow-md w-full sm:w-auto">
            <h2 className="text-lg font-semibold">Editar Produto</h2>
            {modalMessage.status && (
              <p className="m-2 text-red-500">{modalMessage.message}</p>
            )}
            <form
              className="flex flex-col gap-5"
              onSubmit={(e) => e.preventDefault()}
            >
              <Input
                error={errors.name}
                register={register}
                name={'name'}
                labelText={'Nome do produto'}
              />
              <Input
                error={errors.price}
                register={register}
                name={'price'}
                labelText={'Preço do produto'}
                type={'number'}
              />
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 w-full"
                onClick={handleSubmit(deleteProduct)}
              >
                Deletar produto
              </button>
              <div className="flex justify-between gap-2">
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 w-2/4"
                  onClick={onClose}
                >
                  Fechar
                </button>
                <button
                  className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 w-2/4"
                  onClick={handleSubmit(editProduct)}
                >
                  Salvar
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
