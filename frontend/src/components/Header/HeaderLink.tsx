import React from 'react';
import { NavLink } from 'react-router-dom';

interface HeaderLinkProps {
  value: string;
  to: string;
  name: string;
}

const HeaderLink = ({ value, to, name }: HeaderLinkProps) => {
  return <NavLink to={to} >{value}</NavLink>;
};

export { HeaderLink };
