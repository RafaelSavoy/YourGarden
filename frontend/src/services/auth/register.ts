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
    email: string;
    role: string;
  };
  token: string;
}

export async function register(
  registerRequest: RegisterRequestProps
): Promise<RegisterResponseProps> {
  const response = await api.post('/user/register', registerRequest);
  return await response.data;
}
