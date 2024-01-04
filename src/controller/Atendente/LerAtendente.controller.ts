import { Request, Response } from "express";
import Atendente from "../../model/Atendente.model";

export class LerAtendenteController {
  public async LerAtendente(req: Request, res: Response): Promise<void> {
    try {
      const atendente = await Atendente.findAll();

      res.status(200).json(atendente);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erro ao buscar os anydesk" });
    }
  }
}
