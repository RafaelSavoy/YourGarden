import { NextFunction, Request, Response } from 'express';
import { authServices } from '../../../services/auth/auth.services';

export async function verifyPermissionMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ msg: 'Token necessário para essa ação' });
  }
  const response = await authServices.validate(token);
  if (response.userData.role !== 'admin') {
    return res.status(401).json({ msg: 'Você não tem permissão para isso' });
  }
  next();
}
