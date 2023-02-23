import { Sequelize } from 'sequelize-typescript';
import { UserModel } from './models/User.model';
import dotenv from 'dotenv';
dotenv.config();
const dbConfig = require('./config/database');

const sequelize = new Sequelize(dbConfig);

sequelize.addModels([UserModel]);

export { sequelize, UserModel };
