import React from 'react';
import Header from '../components/Header/Header.component';
import { Title } from '../components/Title';
import Footer from '../components/Footer/Footer';
import buildingImage from '../assets/images/building.jpg';

const Community = () => {
  return (
    <div>
      <Header />
      <Title text="Estamos construindo a nossa comunidade. Por enquanto, aproveite os produtos da loja." />
      <img
        src={buildingImage}
        className="sm:w-6/6 md:w-2/5 lg: h-auto m-auto"
      />
      <Footer />
    </div>
  );
};

export default Community;
