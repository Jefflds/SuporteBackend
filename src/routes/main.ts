import express from "express";
import { CadastrarLojaController } from "../controller/Loja/CadastrarLoja.controller";
import { cadastrarClienteController } from "../controller/Cliente/CadastrarCliente.controller";
import { LerLojaController } from "../controller/Loja/LerLojas.controller";
import { ApagarLojaController } from "../controller/Loja/ApagarLojaController";

const router = express.Router();
const cadastrarLojaController = new CadastrarLojaController();
const CadastrarClienteController = new cadastrarClienteController();
const lerLojaController = new LerLojaController();
const apagarLojaController = new ApagarLojaController();

router.post("/loja", cadastrarLojaController.cadastrarLoja);
router.get("/loja", lerLojaController.LerLoja);
router.delete("/loja/:id/:nome?", apagarLojaController.apagarLoja);

router.post("/cliente", CadastrarClienteController.cadastrarCliente);

export default router;
