import React from 'react';
import { FooterTitle } from './FooterTitle';

const Footer = () => {
  return (
    <footer className="flex flex-col bg-green-500 justify-center items-center gap-2 p-2 mt-5">
      <FooterTitle />
    </footer>
  );
};

export default Footer;
