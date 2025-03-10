const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Usuario = require("../models/usuario");

const gerarToken = (id) => jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1h" });

// Cadastro de usuário
const registrar = async (req, res) => {
  try {
    const { email, login, senha } = req.body;

    const usuarioExistente = await Usuario.findOne({ where: { email } });
    if (usuarioExistente) {
      return res.status(400).json({ mensagem: "E-mail já cadastrado" });
    }

    const senhaHash = await bcrypt.hash(senha, 10);
    const novoUsuario = await Usuario.create({ email, login, senha: senhaHash });

    res.status(201).json({
      mensagem: "Usuário cadastrado com sucesso",
      usuario: { id: novoUsuario.id, email: novoUsuario.email, login: novoUsuario.login },
    });
  } catch (error) {
    res.status(500).json({ mensagem: "Erro no servidor", erro: error.message });
  }
};

// Login de usuário
const login = async (req, res) => {
  try {
    const { email, senha } = req.body;

    const usuario = await Usuario.findOne({ where: { email } });
    if (!usuario) return res.status(401).json({ mensagem: "Credenciais inválidas" });

    const senhaValida = await bcrypt.compare(senha, usuario.senha);
    if (!senhaValida) return res.status(401).json({ mensagem: "Credenciais inválidas" });

    const token = gerarToken(usuario.id);
    res.json({ mensagem: "Login bem-sucedido", token, usuario: { id: usuario.id, email: usuario.email, login: usuario.login } });
  } catch (error) {
    res.status(500).json({ mensagem: "Erro no servidor", erro: error.message });
  }
};

module.exports = { registrar, login };
