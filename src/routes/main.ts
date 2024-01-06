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
import { cadastrarAtendenteController } from "../controller/Atendente/CadastrarAtendente.controller";
import { LerAtendenteController } from "../controller/Atendente/LerAtendente.controller";
import ApagarAtendenteController from "../controller/Atendente/ApagarAtendente.controller";
import  CadastrarAtendimentoController from "../controller/Atendimento/CadastrarAtendimento.controller";
import { LerAtendimentoController } from "../controller/Atendimento/LerAtendimento.controller";
import ApagarAtendimentoController from "../controller/Atendimento/ApagarAtendimento.controller";

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
const CadastrarAtendenteController = new cadastrarAtendenteController();
const lerAtendenteController = new LerAtendenteController();
const apagarAtendenteController = new ApagarAtendenteController();
const cadastrarAtendimentoController = new CadastrarAtendimentoController();
const lerAtendimentoController = new LerAtendimentoController();
const apagarAtendimentoController = new ApagarAtendimentoController();

router.post("/loja", cadastrarLojaController.cadastrarLoja);
router.get("/loja", lerLojaController.LerLoja);
router.get("/loja/:id", lerLojaController.LerLoja);
router.delete("/loja/:id/:nome?", apagarLojaController.apagarLoja);

router.post("/cliente", CadastrarClienteController.cadastrarCliente);
router.get("/cliente", lerClienteController.LerCliente);
router.get("/cliente/:id", lerClienteController.LerCliente); 
router.delete("/cliente/:id", apagarClienteController.apagarCliente);

router.post("/anydesk", CadastrarAnydeskController.cadastrarAnydesk);
router.get("/anydesk", lerAnydeskController.LerAnydesk);
router.get("/anydesk/:id", lerAnydeskController.LerAnydesk);
router.delete("/anydesk/:id", apagarAnydeskController.apagarAnydesk);

router.post("/atendente", CadastrarAtendenteController.cadastrarAtendente);
router.get("/atendente", lerAtendenteController.LerAtendente);
router.get("/atendente/:id", lerAtendenteController.LerAtendente);
router.delete("/atendente/:id", apagarAtendenteController.apagarAtendente);

router.post("/atendimento", cadastrarAtendimentoController.CadastrarAtendimento);
router.get("/atendimento", lerAtendimentoController.LerAtendimento);
router.delete("/atendimento/:id"), apagarAtendimentoController.apagarAtendimento;

export default router;
