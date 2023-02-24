import { useState } from 'react';
import { useUser } from '../../contexts/UserContext';
import EditProduct from './EditProduct/EditProduct';

export interface Product {
  id: number;
  name: string;
  price: number;
}

interface ProductCardProps {
  product: Product;
  onBuyClick: (product: Product) => void;
  updateProducts: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onBuyClick,
  updateProducts
}) => {
  const { user } = useUser();
  const [isEditingProduct, setIsEditingProduct] = useState<{
    status: boolean;
    product: Product | null;
  }>({
    status: false,
    product: null
  });

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg border border-gray text-center flex flex-col gap-2 p-2">
      <img
        className="w-full"
        src={
          'https://www.petz.com.br/blog/wp-content/uploads/2019/05/planta-anturio.jpg'
        }
        alt={product.name}
      />
      <div>
        <div className="sm:text-lg md:text-xl lg:text-xl">{product.name}</div>
        <p className="text-gray-700 sm:text-md md:text-lg lg:text-xl">
          R${product.price}
        </p>
      </div>
      <button className="bg-green-500 hover:bg-green-800 text-white font-bold py-1 px-4 rounded w-full sm:text-md md:text-lg lg:text-xl">
        Comprar
      </button>
      {user.role === 'admin' && (
        <button
          className="bg-red-500 hover:bg-red-800 text-white font-bold py-1 px-4 rounded w-full sm:text-md md:text-lg lg:text-xl"
          onClick={() => setIsEditingProduct({ status: true, product })}
        >
          Gerenciar Produto
        </button>
      )}
      <EditProduct
        isOpened={isEditingProduct.status}
        currentProduct={isEditingProduct.product}
        onClose={() => setIsEditingProduct({ status: false, product: null })}
        updateProducts={updateProducts}
      />
    </div>
  );
};

export { ProductCard };
