const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(process.env.PGDATABASE, process.env.PGUSER, process.env.PGPASSWORD, {
  host: process.env.PGHOST,
  port: process.env.PGPORT,
  dialect: "postgres",
  logging: false, // Para não poluir o console com logs
  dialectOptions: {
    ssl: {
      require: true, // Ativa o SSL
      rejectUnauthorized: false, // Ignora a verificação de certificado
    },
  },
});

module.exports = sequelize;
