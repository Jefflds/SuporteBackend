import express from "express";
import { CadastrarLojaController } from "../controller/Loja/CadastrarLoja.controller";
import { cadastrarClienteController } from "../controller/Cliente/CadastrarCliente.controller";
import { LerLojaController } from "../controller/Loja/LerLojas.controller";
import { ApagarLojaController } from "../controller/Loja/ApagarLojaController";
import { LerClienteController } from "../controller/Cliente/LerCliente.controller";
import ApagarClienteController from "../controller/Cliente/ApagarCliente.controller";
import { cadastrarAnydeskController } from "../controller/AnyDesk/CadastrarAnydesk.controller";
import { LerAnydeskController } from "../controller/AnyDesk/LerAnydesk.controller";
import ApagarAnydeskController from "../controller/AnyDesk/ApagarAnydesk.controller";

const router = express.Router();
const cadastrarLojaController = new CadastrarLojaController();
const CadastrarClienteController = new cadastrarClienteController();
const lerLojaController = new LerLojaController();
const apagarLojaController = new ApagarLojaController();
const lerClienteController = new LerClienteController();
const apagarClienteController = new ApagarClienteController();
const CadastrarAnydeskController = new cadastrarAnydeskController();
const lerAnydeskController = new LerAnydeskController();
const apagarAnydeskController = new ApagarAnydeskController();

router.post("/loja", cadastrarLojaController.cadastrarLoja);
router.get("/loja", lerLojaController.LerLoja);
router.delete("/loja/:id/:nome?", apagarLojaController.apagarLoja);

router.post("/cliente", CadastrarClienteController.cadastrarCliente);
router.get("/cliente", lerClienteController.LerCliente);
router.delete("/cliente/:id", apagarClienteController.apagarCliente);

router.post("/anydesk", CadastrarAnydeskController.cadastrarAnydesk);
router.get("/anydesk", lerAnydeskController.LerAnydesk);
router.delete("/anydesk/:id", apagarAnydeskController.apagarAnydesk);

router.post("/atendente");
router.get("/atendente");
router.delete("/atendente/:id");

router.post("/atendimento");
router.get("/atendimento");
router.delete("/atendimento/:id");

export default router;
