import * as jwt from 'jsonwebtoken';
import { PRIVATE } from '../../utils/config';

interface CreateTokenProps {
  id: string;
  firstName: string;
  lastName: string;
}

class UserTokenManager {
  PRIVATE: string;
  constructor(PRIVATEKEY: string) {
    this.PRIVATE = PRIVATEKEY;
  }
  verifyToken(token: string) {
    return jwt.verify(token, PRIVATE);
  }
  createToken(userInfos: CreateTokenProps) {
    return jwt.sign(userInfos, PRIVATE, { expiresIn: '1d' });
  }
}

const tokenManager = new UserTokenManager(PRIVATE);

export { tokenManager };
