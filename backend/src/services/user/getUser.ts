import { UserModel } from '../../database/models/User.model';

export async function getUser(email: string): Promise<UserModel | null> {
  return await UserModel.findOne({ where: { email } });
}
