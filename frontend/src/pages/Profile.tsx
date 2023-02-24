import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header.component';
import { Title } from '../components/Title';
import { useUser } from '../contexts/UserContext';

const Profile = () => {
  const { user, resetUser } = useUser();
  const navigate = useNavigate();
  useEffect(() => {
    if (!user.logged) {
      navigate('/login');
    }
  });
  return (
    <div>
      <div>
        <Header />
        <main className="h-screen flex flex-col items-center">
          <Title text={`Ola, ${user.firstName}`} />
          <Title
            text={`Você é um ${
              user.role === 'admin' ? 'Administrador' : 'Usuário'
            }`}
          />
          <button
            className="bg-green-500 w-20 rounded text-white p-2"
            onClick={resetUser}
          >
            Sair
          </button>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Profile;
