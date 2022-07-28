const Sequelize = require('sequelize');

const connMysql = {
  database: process.env.DATABASE_MYSQL,
  username: process.env.USER_MYSQL,
  password: process.env.PASSWORD_MYSQL,
  host: process.env.SERVER_MYSQL,
};

const sequelize = new Sequelize(connMysql.database, connMysql.username, connMysql.password, {
  host: connMysql.host,
  dialect: 'mysql',
  timezone: process.env.TIMEZONE_MYSQL
})

sequelize.authenticate()
.then(() => {
  console.log('Connection has been established successfully. (MySQL)');
})
.catch(err => {
  console.error('Unable to connect to the database (MySQL):', err);
});

module.exports = sequelize;