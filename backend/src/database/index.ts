import { Sequelize } from 'sequelize-typescript';
import { UserModel } from './models/User.model';
import dotenv from 'dotenv';
import { ProductModel } from './models/Product.model';
dotenv.config();
const dbConfig = require('./config/database');

const sequelize = new Sequelize(dbConfig);

sequelize.addModels([UserModel,ProductModel]);

export { sequelize, UserModel };
