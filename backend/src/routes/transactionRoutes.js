const express = require('express');
const router = express.Router();
const verificarToken = require('../middleware/authMiddleware'); // Importe o middleware de verificação

// A função precisa estar importada corretamente do controller
const { criarTransacao } = require('../controllers/transactionController');

// Verifique se o nome da função está correto e foi exportado
router.post('/transacao', verificarToken, criarTransacao);

module.exports = router;
