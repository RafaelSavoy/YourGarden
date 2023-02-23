import jwt from 'jsonwebtoken';
import { PRIVATE } from '../../utils/config';
import { HTTPError } from '../errors/httpError';

export async function verifyToken(token: string) {
  try {
    return jwt.verify(token, PRIVATE);
  } catch (e) {
    console.log(
      'Erro ao verificar token, verifique se a chave PRIVATE está configurada.'
    );
    throw new HTTPError(
      'Erro interno, contate o administrador do sistema',
      500
    );
  }
}
