import jwt from 'jsonwebtoken';
import { PRIVATE } from '../../utils/config';
import { HTTPError } from '../errors/httpError';

interface CreateTokenProps {
  id: number;
  firstName: string;
  lastName: string;
}

export async function createToken({
  id,
  firstName,
  lastName
}: CreateTokenProps) {
  try {
    return jwt.sign({ id, firstName, lastName }, PRIVATE, { expiresIn: '1d' });
  } catch (e) {
    console.log(
      'Erro ao criar token, verifique se a chave PRIVATE está configurada.'
    );
    throw new HTTPError(
      'Erro interno, contate o administrador do sistema',
      500
    );
  }
}
