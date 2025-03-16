const Categoria = require('../models/categoria');  // Verifique se o caminho está correto
const jwt = require('jsonwebtoken');

const criarCategoria = async (req, res) => {
  try {
    const categoria = req.body.categoria;

    if (!categoria) {
      return res.status(400).json({ mensagem: "Preencha todos os campos." });
    }

    const novaCategoria = await Categoria.create({ categoria });

    res.status(201).json({
      mensagem: "Categoria cadastrada com sucesso",
      categoria: { id: novaCategoria.categoria_ID, categoria: novaCategoria.categoria },
    });
  } catch (error) {
    res.status(500).json({ mensagem: "Erro no servidor", erro: error.message });
  }
};

module.exports = { criarCategoria };
