const express = require('express');
const router = express.Router();
const verificarToken = require('../middleware/authMiddleware'); // Importe o middleware de verificação

// A função precisa estar importada corretamente do controller
const { criarTransacao, excluirTransacao } = require('../controllers/transactionController');

// Verifique se o nome da função está correto e foi exportado
router.post('/transacao', verificarToken, criarTransacao);

// Excluir uma transação
router.delete('/transacao/:transacao_id', verificarToken, excluirTransacao);


module.exports = router;
