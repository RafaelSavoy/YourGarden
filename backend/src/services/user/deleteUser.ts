import { UserModel } from '../../database/models/User.model';

export async function deleteUser(email: string): Promise<void> {
  await UserModel.destroy({ where: { email } });
}
