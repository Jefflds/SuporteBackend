import { Request, Response } from "express";
import Anydesk from "../../model/Anydesk.model";

export class LerAnydeskController {
  public async LerAnydesk(req: Request, res: Response): Promise<void> {
    try {
      const anydesk = await Anydesk.findAll();

      res.status(200).json(anydesk);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erro ao buscar os anydesk" });
    }
  }
}
