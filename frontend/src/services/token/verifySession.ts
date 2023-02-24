import { authServices } from '../auth/authServices';

interface User {
  firstName: string;
  lastName: string;
  email: string;
  logged: boolean;
}

export async function verifySession(
  user: User,
  token: string | undefined,
  callback: (err: Error | null, data: any) => void
) {
  if (!user.logged) {
    if (!token) {
      return new Error('Token não identificado');
    } else {
      try {
        const response = await authServices.validate(token);
        callback(null, response);
        return response;
      } catch (e) {
        callback(e as Error, null);
      }
    }
  }
}
