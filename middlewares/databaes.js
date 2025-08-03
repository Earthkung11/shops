const { Sequelize } = require('sequelize');

// โหลด .env เฉพาะตอน dev (optional)
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) {
  throw new Error('Missing DATABASE_URL');
}

const sequelize = new Sequelize(databaseUrl, {
  dialect: 'postgres',
  protocol: 'postgres',
  logging: false,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
});

module.exports = sequelize;
