import React, { useEffect, useState } from 'react';
import { useUser } from '../../contexts/UserContext';
import { productServices } from '../../services/products/productService';
import { Title } from '../Title';
import AddProducts from './AddProduct/AddProducts';
import ErrorComponent from './ErrorComponent';
import { Product } from './ProductCard';
import Products from './Products';

const StoreComponent = () => {
  const { user } = useUser();
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState({ status: false, message: '' });

  function updateProducts() {
    productServices
      .getProducts()
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => {
        console.log('Erro ao resgatar os produtos');
        setError({ status: true, message: 'Erro ao resgatar os produtos' });
      });
  }

  useEffect(() => {
    updateProducts();
  }, []);

  return (
    <main className='min-h-screen'>
      <Title text="As melhores plantas do mercado" />
      {user.role == 'admin' ? <AddProducts updateProducts={updateProducts} /> : ''}
      {error.status ? <ErrorComponent /> : ''}
      <Products
        error={error}
        products={products}
        updateProducts={updateProducts}
        onBuyClick={function (product: Product): void {}}
      />
    </main>
  );
};

export { StoreComponent };
