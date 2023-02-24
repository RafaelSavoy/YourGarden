import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { useUser } from '../../../contexts/UserContext';
import { productServices } from '../../../services/products/productService';
import { Input } from './Input';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  updateProducts: () => void;
}

interface FormData {
  name: string;
  price: number;
}

const productSchema = yup.object().shape({
  name: yup.string().required('Coloque o nome do produto'),
  price: yup.number().required('Coloque o preço do produto')
});

const Modal = ({ isOpen, onClose, updateProducts }: ModalProps) => {
  const { user, getUserToken } = useUser();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormData>({
    resolver: yupResolver(productSchema)
  });

  async function addProduct(data: FormData) {
    try {
      const token = getUserToken();
      await productServices.addProduct(data, token || '');
      alert('Produto adicionado com sucesso!');
    } catch (e) {
      alert('Erro ao adicionar produto!');
      console.log(e);
    } finally {
      reset();
      updateProducts();
    }
  }

  return (
    <>
      {isOpen ? (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center z-50 overflow-hidden">
          <div className="bg-white p-4 rounded-md shadow-md w-full sm:w-auto">
            <h2 className="text-lg font-semibold mb-4">Adicionar Produto</h2>
            <form
              onSubmit={handleSubmit(addProduct)}
              className="flex flex-col gap-5"
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
              />
              <div className="flex justify-between">
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 w-1/3"
                  onClick={onClose}
                >
                  Fechar
                </button>
                <button
                  type="submit"
                  className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 w-2/4"
                >
                  Adicionar
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
