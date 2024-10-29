import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('inmobiliaria2_db', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
  });

  export default sequelize;