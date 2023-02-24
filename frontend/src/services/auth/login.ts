import { AxiosRequestConfig } from 'axios';
import { api } from '../../api/axiosConfig';

interface LoginRequestProps {
  email: string;
  password: string;
}

interface LoginResponseProps {
  userData: {
    firstName: string;
    lastName: string;
    email: string;
    role: string;
  };
  token: string;
}

export async function login(
  loginRequest: LoginRequestProps
): Promise<LoginResponseProps> {
  const response = await api.post('/user/login', loginRequest);
  return await response.data;
}
