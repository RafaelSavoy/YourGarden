export interface Product {
  imageUrl: string;
  name: string;
  price: string;
}

interface ProductCardProps {
  product: Product;
  onBuyClick: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg border border-gray text-center flex flex-col gap-2 p-2">
      <img className="w-full" src={product.imageUrl} alt={product.name} />
      <div>
        <div className="sm:text-lg md:text-xl lg:text-xl">
          {product.name}
        </div>
        <p className="text-gray-700 sm:text-md md:text-lg lg:text-xl">
          R${product.price}
        </p>
      </div>
      <button className="bg-green-500 hover:bg-green-800 text-white font-bold py-2 px-4 rounded w-full sm:text-md md:text-lg lg:text-xl">
        Comprar
      </button>
    </div>
  );
};

export { ProductCard };
