const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const TipoTransacao = sequelize.define('tipo_transacao', {
  tipo_transacao_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  transacao: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,  // Garante que cada tipo de transação seja único
  },
}, {
  tableName: 'tipo_transacao',  // Garante que o nome da tabela seja 'tipo_transacao' (minúsculo)
  timestamps: false,            // Desabilita as colunas 'createdAt' e 'updatedAt'
});

module.exports = TipoTransacao;
