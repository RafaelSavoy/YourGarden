import { Sequelize } from 'sequelize-typescript';
import { UserModel } from '../database';
import { User } from '../services/user/user.service';

const sequelize = new Sequelize('test', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false
});

const testUser: User = {
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
  await UserModel.destroy({ truncate: true, where: {} });
  await sequelize.close()
  console.log('Banco de dados de teste limpo');
}

export { testUser, initTestDatabase, closeTestDatabase };
