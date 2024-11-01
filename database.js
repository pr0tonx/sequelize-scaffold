const {Sequelize} = require('sequelize');

const sequelize = new Sequelize({
  database: 'database_test',
  username: 'root',
  password: 'admin',
  host: '127.0.0.1',
  dialect: 'mysql'
});

module.exports = sequelize;
