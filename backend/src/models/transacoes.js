const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Transacoes = sequelize.define('transacoes', {
  transacao_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  categoria_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'categoria',  // Supondo que a tabela de categorias se chama 'categorias'
      key: 'categoria_id',  // Chave primária na tabela 'categorias'
    },
  },
  usuario_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Usuarios',  // Supondo que você tenha uma tabela 'usuarios'
      key: 'usuario_id',  // Chave primária na tabela 'usuarios'
    },
  },
  data: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  valor: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  tipo_transacao_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'tipo_transacao', // Nome da tabela para tipos de transação
      key: 'tipo_transacao_id', // Chave primária na tabela 'tipo_transacao'
    },
  },
}, {
  tableName: 'transacoes',  // Garante que o nome da tabela seja 'transacoes' (minúsculo)
  timestamps: false,        // Desabilita as colunas 'createdAt' e 'updatedAt'
});

module.exports = Transacoes;
