const {Sequelize} = require('sequelize');
const sequelize = require('./database');
const Job = require('./job');

(async () => await sequelize.sync())();

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.Job = Job;
