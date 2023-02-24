import React, { createContext, useContext, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  logged: boolean;
}
interface UserUpdate {
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  logged: boolean;
}

type UserContextType = {
  user: User;
  updateUser: (user: UserUpdate, token: string) => void;
  resetUser: () => void;
  getUserToken: () => string | undefined;
  setUserToken: (token: string) => void;
};

type UserProviderType = {
  children: React.ReactNode;
};

const defaultValues: UserUpdate = {
  firstName: '',
  lastName: '',
  email: '',
  logged: false,
  role: ''
};

export const UserContext = createContext({} as UserContextType);

export const UserProvider = ({ children }: UserProviderType) => {
  const [user, setUser] = useState<User>(defaultValues);
  const [cookies, setCookie, removeCookie] = useCookies(['token']);
  const navigate = useNavigate();

  function updateUser(user: UserUpdate, token: string): void {
    const { firstName, lastName, email, role } = user;
    setUser({ firstName, lastName, email, role, logged: true });
    setCookie('token', token);
  }
  function resetUser() {
    setUser({
      firstName: '',
      lastName: '',
      email: '',
      role: '',
      logged: false
    });
    removeCookie('token');
    navigate('/store');
  }
  function getUserToken(): string | undefined {
    return cookies.token;
  }
  function setUserToken(token: string): void {
    setCookie('token', token);
  }

  return (
    <UserContext.Provider
      value={{ user, updateUser, resetUser, getUserToken, setUserToken }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextType => useContext(UserContext);
