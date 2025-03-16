const express = require('express');
const router = express.Router();

// A função precisa estar importada corretamente do controller
const { criarCategoria } = require('../controllers/categoryController');

// Verifique se o nome da função está correto e foi exportado
router.post('/categories', criarCategoria);

module.exports = router;
