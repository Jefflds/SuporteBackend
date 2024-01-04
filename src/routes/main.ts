import express from "express";
import { CadastrarLojaController } from "../controller/Loja/CadastrarLoja.controller";
import { cadastrarClienteController } from "../controller/Cliente/CadastrarCliente.controller";
import { LerLojaController } from "../controller/Loja/LerLojas.controller";
import { ApagarLojaController } from "../controller/Loja/ApagarLojaController";
import { LerClienteController } from "../controller/Cliente/LerCliente.controller";
import ApagarClienteController from "../controller/Cliente/ApagarCliente.controller";

const router = express.Router();
const cadastrarLojaController = new CadastrarLojaController();
const CadastrarClienteController = new cadastrarClienteController();
const lerLojaController = new LerLojaController();
const apagarLojaController = new ApagarLojaController();
const lerClienteController = new LerClienteController();
const apagarClienteController = new ApagarClienteController();

router.post("/loja", cadastrarLojaController.cadastrarLoja);
router.get("/loja", lerLojaController.LerLoja);
router.delete("/loja/:id/:nome?", apagarLojaController.apagarLoja);

router.post("/cliente", CadastrarClienteController.cadastrarCliente);
router.get("/cliente", lerClienteController.LerCliente);
router.delete("/cliente/:id", apagarClienteController.apagarCliente);

router.post("/anydesk");
router.get("/anydesk");
router.delete("/anydesk/:id");

router.post("/atendente");
router.get("/atendente");
router.delete("/atendente/:id");

export default router;
