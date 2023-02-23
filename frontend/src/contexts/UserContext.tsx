import { createContext, useContext, useEffect, useState } from 'react';
import { api } from '../api/axiosConfig';

interface User {
  firstName: string;
  lastName: string;
}

interface UserContextData {
  user: User | null;
  updateUser: (firstName: string, lastName: string, token: string) => void;
  clearUser: () => void;
}

const UserContext = createContext<UserContextData>({
  user: null,
  updateUser: () => {},
  clearUser: () => {}
});


interface UserProviderProps {
  children: React.ReactNode;
}
function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      api
        .get('/user', { headers: { Authorization: `Bearer ${token}` } })
        .then((response) => {
          const { userData, token } = response.data;
          updateUser(userData.firstName, userData.lastName, token);
        })
        .catch(() => {
          localStorage.removeItem('token');
        });
    }
  }, []);

  const updateUser = (firstName: string, lastName: string, token: string) => {
    localStorage.setItem('token', token);
    setUser({ firstName, lastName });
  };

  const clearUser = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, updateUser, clearUser }}>
      {children}
    </UserContext.Provider>
  );
}

const useUser = () => useContext(UserContext);

export { UserProvider, useUser };