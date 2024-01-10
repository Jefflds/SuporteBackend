import { Request, Response, Router } from "express";
import Anydesk from "../../model/Anydesk.model";

export class LerAnydeskController {
  public path = "/api/anydesk/:id?";
  public router = Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(this.path, this.LerAnydesk.bind(this));
  }

  public async LerAnydesk(req: Request, res: Response): Promise<void> {
    try {
      if (req.params.id) {
        const anydeskId = req.params.id;
        const anydesk = await Anydesk.findByPk(anydeskId);

        if (!anydesk) {
          res.status(404).json({ error: "Anydesk não encontrado" });
          return;
        }

        res.status(200).json(anydesk);
      } else {
        const anydesks = await Anydesk.findAll();

        if (anydesks.length === 0) {
          res.status(404).json({ error: "Nenhum Anydesk encontrado" });
          return;
        }

        res.status(200).json(anydesks);
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erro ao buscar os anydesk" });
    }
  }
}
