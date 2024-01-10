import { Request, Response, Router } from "express";
import Atendente from "../../model/Atendente.model";

export class LerAtendenteController {
  public path = "/api/atendente/:id?";
  public router = Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(this.path, this.LerAtendente.bind(this));
  }

  public async LerAtendente(req: Request, res: Response): Promise<void> {
    try {
      if (req.params.id) {
        const AtendenteId = req.params.id;
        const atendente = await Atendente.findByPk(AtendenteId);

        if (!atendente) {
          res.status(404).json({ error: "Atendente não encontrado" });
          return;
        }

        res.status(200).json(atendente);
      } else {
        const atendentes = await Atendente.findAll();

        if (atendentes.length === 0) {
          res.status(404).json({ error: "Nenhum Anydesk encontrado" });
          return;
        }

        res.status(200).json(atendentes);
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erro ao buscar os Atendentes" });
    }
  }
}
