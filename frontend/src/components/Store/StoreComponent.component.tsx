import React from 'react';
import { Title } from '../Title';
import { Product } from './ProductCard';
import Products from './Products';

const StoreComponent = () => {
  const products: Product[] = [
    {
      name: 'Product 1',
      price: '1253',
      imageUrl:
        'https://static.vecteezy.com/ti/fotos-gratis/t2/1254589-crescimento-de-planta-no-solo-gratis-foto.jpg'
    },
    {
      name: 'Product 1',
      price: '1253',
      imageUrl:
        'https://static.vecteezy.com/ti/fotos-gratis/t2/1254589-crescimento-de-planta-no-solo-gratis-foto.jpg'
    },
    {
      name: 'Product 1',
      price: '1253',
      imageUrl:
        'https://blog.cobasi.com.br/wp-content/uploads/2022/07/planta-pilea-capa.webp'
    },
    {
      name: 'Product 1',
      price: '1253',
      imageUrl:
        'https://static.vecteezy.com/ti/fotos-gratis/t2/1254589-crescimento-de-planta-no-solo-gratis-foto.jpg'
    },
    {
      name: 'Product 1',
      price: '1253',
      imageUrl:
        'https://static.vecteezy.com/ti/fotos-gratis/t2/1254589-crescimento-de-planta-no-solo-gratis-foto.jpg'
    }
  ];
  function onBuyClick(product: Product) {}
  return (
    <main>
      <Title text="As melhores plantas do mercado"/>
      <Products
        products={products}
        onBuyClick={function (product: Product): void {}}
      />
    </main>
  );
};

export { StoreComponent };
