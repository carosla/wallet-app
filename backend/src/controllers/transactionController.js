const Usuario = require('../models/usuario');
const Transacoes = require('../models/transacoes');
const TipoTransacao = require('../models/tipo_transacao');

const criarTransacao = async (req, res) => {
  try {
    const { categoria_id, valor, data, tipo_transacao } = req.body;

    if (!categoria_id || !valor || !data || !tipo_transacao) {
      return res.status(400).json({ mensagem: "Preencha todos os campos." });
    }

    const usuario_id = req.usuario_id;  // Certifique-se de que é req.usuario_id e não req.usuarioId

    // Verificando o usuário
    const usuario = await Usuario.findOne({ where: { usuario_id: usuario_id } });

    if (!usuario) {
      return res.status(400).json({ mensagem: "Usuário não encontrado." });
    }

    // Verificando o tipo de transação
    const tipoTransacao = await TipoTransacao.findOne({ where: { transacao: tipo_transacao } });

    if (!tipoTransacao) {
      return res.status(400).json({ mensagem: "Tipo de transação não encontrado." });
    }

    // Criando a transação
    const novaTransacao = await Transacoes.create({
      categoria_id,
      usuario_id,
      tipo_transacao_id: tipoTransacao.tipo_transacao_id,  // Associando o tipo de transação
      data,
      valor,
    });

    res.status(201).json({
      mensagem: "Transação criada com sucesso.",
      transacao: novaTransacao,
    });

  } catch (error) {
    res.status(500).json({ mensagem: "Erro no servidor", erro: error.message });
  }
};

module.exports = { criarTransacao };
