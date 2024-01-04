import express from "express";
import cors from "cors";
import router from "./routes/main";

const PORT = process.env.PORT || 4000;

const HOST = process.env.HOST || "http://localhost";

const app = express();

app.use(
  cors({
    origin: [process.env.FRONTENDURL || "http://localhost:5173"],
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  try {
    res.send("Seja Bem vindo a API do suporte!");
  } catch (error) {
    console.log("Erro ao Acessar Endpoint: ", error);
  }
});

app.use("/api", router);

app.use((req, res) => {
  try {
    res.status(404);
  } catch (error) {
    console.log("Erro ao fazer requisição: ", error);
  }
});

try {
  app.listen(PORT, () => {
    console.log(`Servidor rodando com sucesso ${HOST}:${PORT}`);
  });
} catch (error) {
  console.log("Erro ao Iniciar Servidor: ", error);
}
