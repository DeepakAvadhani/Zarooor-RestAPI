const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('crud_api', 'root', '', {
  host: '127.0.0.1',
  dialect: 'mysql'
});

sequelize.authenticate()
  .then(() => {
    console.log('Connection to the database has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;
