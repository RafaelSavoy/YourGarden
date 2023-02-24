import React from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header.component';
import { StoreComponent } from '../components/Store/Store.component';

const Store = () => {
  return (
    <div>
      <Header />
      <StoreComponent />
      <Footer />
    </div>
  );
};

export default Store;
