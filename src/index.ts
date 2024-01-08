import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import router from "./routes/main";
const { createProxyMiddleware } = require("http-proxy-middleware");

const PORT = process.env.PORT || 4000;


const app = express();

app.use(cors());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use(
  "/api",
  createProxyMiddleware({
    target: "https://suporte-backend.onrender.com",
    changeOrigin: true,
    pathRewrite: { "^/api": "" },
  })
);

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Seja Bem vindo a API do suporte!");
});

app.use("/api", router);

app.use((req: Request, res: Response) => {
  res.status(404).send("Endpoint não encontrado");
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send("Erro interno do servidor");
});

app.listen(PORT, () => {
  console.log(`Servidor rodando com sucesso`);
});
