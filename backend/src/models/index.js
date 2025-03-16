const sequelize = require("../config/database");
const Usuario = require("./usuario");
const Categoria = require('./categoria')

const syncDB = async () => {
  try {
    await sequelize.sync({ alter: true }); // Cria as tabelas automaticamente
    console.log("Banco de dados sincronizado!");
  } catch (error) {
    console.error("Erro ao sincronizar o banco:", error);
  }
};

module.exports = { sequelize, Usuario, Categoria, syncDB };

