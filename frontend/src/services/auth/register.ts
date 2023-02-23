import { api } from '../../api/axiosConfig';

interface RegisterRequestProps {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

interface RegisterResponseProps {
  userData: {
    firstName: string;
    lastName: string;
  };
  token: string;
}

export async function register(
  registerRequest: RegisterRequestProps
): Promise<RegisterResponseProps> {
  return await api.post('/user/register', registerRequest);
}
