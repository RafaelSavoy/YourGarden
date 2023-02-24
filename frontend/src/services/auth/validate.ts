import { AxiosResponse } from 'axios';
import { api } from '../../api/axiosConfig';

interface ValidateResponseProps {
  userData: {
    email: string;
    firstName: string;
    lastName: string;
  };
  token: string;
}

export async function validate(
  token: string
): Promise<AxiosResponse<ValidateResponseProps>> {
  const response = await api.get('/user/', {
    headers: { Authorization: `Bearer ${token}` }
  });
  return response.data;
}
