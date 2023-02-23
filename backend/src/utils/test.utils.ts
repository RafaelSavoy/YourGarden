import { Sequelize } from 'sequelize-typescript';
import { UserModel } from '../database';
import { User } from '../services/user/user.service';

const sequelize = new Sequelize('test', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false
});

const testUser: User = {
  id: null,
  firstName: 'Test',
  lastName: 'User',
  email: 'test@example.com',
  password: 'password123'
};

async function initTestDatabase() {
  await sequelize.sync({ force: true });
  sequelize.addModels([UserModel]);
}
async function closeTestDatabase() {
  await UserModel.destroy({ truncate: true });
  await sequelize.close();
}

export { testUser, initTestDatabase, closeTestDatabase };