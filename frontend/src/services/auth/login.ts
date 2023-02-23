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
  };
  token: string;
}

export async function login(
  loginRequest: LoginRequestProps
): Promise<LoginResponseProps> {
  return await api.post('/user/login', loginRequest);
}
