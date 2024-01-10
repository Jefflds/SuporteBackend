import { Request, Response, Router } from "express";
import Loja from "../../model/Loja.model";

export class LerLojaController {
  public path = "/api/loja/:id";
  public router = Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(this.path, this.LerLoja.bind(this));
  }

  public async LerLoja(req: Request, res: Response): Promise<void> {
    try {
      if (req.params.id) {
        const lojaID = req.params.id;
        const loja = await Loja.findByPk(lojaID);

        if (!loja) {
          res.status(404).json({ error: "Loja não encontrada" });
          return;
        }

        res.status(200).json(loja);
      } else {
        const lojas = await Loja.findAll();

        if (lojas.length === 0) {
          res.status(404).json({ error: "Nenhum Anydesk encontrado" });
          return;
        }

        res.status(200).json(lojas);
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erro ao buscar as lojas" });
    }
  }
}
