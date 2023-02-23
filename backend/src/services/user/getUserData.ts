import { UserModel } from '../../database';

export function getUserData(user: UserModel) {
  const { id, firstName, lastName } = user;
  return { id: id!, firstName, lastName };
}
