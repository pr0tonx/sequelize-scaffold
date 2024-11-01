const {DataTypes} = require('sequelize');
const sequelize = require('./database');

const Job = sequelize.define('Job', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true
  },
  titulo: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'Job'
});

module.exports = Job;
