import { deleteUser } from './deleteUser';
import { getUser } from './getUser';
import { getUserData } from './getUserData';
import { createUser } from './createUser';

interface User {
  id?: number | null;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const userServices = {
  createUser,
  deleteUser,
  getUser,
  getUserData
};

export { userServices, User };
