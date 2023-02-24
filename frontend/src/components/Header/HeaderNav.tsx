import React from 'react';
import { useUser } from '../../contexts/UserContext';
import { HeaderLink } from './';

const HeaderNav = () => {
  const { user } = useUser();
  return (
    <nav className="flex gap-5 text-lg text-white">
      <HeaderLink to="/store" name="store" value="Loja" />
      <HeaderLink to="/community" name="community" value="Comunidade" />
      {user.logged ? (
        <HeaderLink to="/profile" name="profile" value="Perfil" />
      ) : (
        <HeaderLink to="/login" name="login" value="Entrar" />
      )}
    </nav>
  );
};

export { HeaderNav };
