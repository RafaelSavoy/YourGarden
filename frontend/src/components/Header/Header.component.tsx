import React from 'react';
import { HeaderNav, HeaderTitle } from '.';

const Header = () => {
  return (
    <header className="flex flex-col bg-green-500 justify-center items-center gap-2 p-2">
      <HeaderTitle />
      <HeaderNav />
    </header>
  );
};

export default Header;
