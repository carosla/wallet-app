require("dotenv").config();
const express = require("express");
const cors = require("cors");

const sequelize = require("./config/database");
const authRoutes = require("./routes/authRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("API está rodando!");
});

app.listen(PORT, async () => {
  try {
    await sequelize.authenticate();
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
  } catch (error) {
    console.error("❌ Erro ao conectar no banco:", error);
  }
});
