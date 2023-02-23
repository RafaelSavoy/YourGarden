import { UserModel } from '../../database/models/User.model';
import { User } from './user.service';

export async function createUser(data: User): Promise<UserModel> {
  return await UserModel.create({
    email: data.email,
    firstName: data.firstName,
    lastName: data.lastName,
    password: data.password
  });
}
