import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderLink } from './HeaderLink';

const Header = () => {
  return (
    <header className="flex flex-col bg-green-500 justify-center items-center gap-2 p-2">
      <h1 className="text-3xl text-white font-bold">YourGarden</h1>
      <nav className="flex gap-5 text-lg text-white">
        <HeaderLink to="/store" name="store" value="Loja" />
        <HeaderLink to="/community" name="community" value="Comunidade" />
      </nav>
    </header>
  );
};

export default Header;
