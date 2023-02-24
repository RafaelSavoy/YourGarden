import { Product, ProductCard } from './ProductCard';

interface ProductsProps {
  products: Product[];
  onBuyClick: (product: Product) => void;
  updateProducts: () => void;
  error: {
    status: boolean;
    message: string;
  };
}

const Products: React.FC<ProductsProps> = ({ products, onBuyClick, error, updateProducts }) => {
  return (
    <section className="flex justify-center p-2 w-full">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl m-auto">
        {products.map((product, index) => (
          <ProductCard
            key={product.id}
            product={product}
            onBuyClick={() => onBuyClick(product)}
            updateProducts={updateProducts}
          />
        ))}
      </div>
    </section>
  );
};

export default Products;
