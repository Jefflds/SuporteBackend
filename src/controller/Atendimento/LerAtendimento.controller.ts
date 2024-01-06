import { Request, Response } from "express";
import Atendimento from "../../model/Atendimento.model";

export class LerAtendimentoController {
  public async LerAtendimento(req: Request, res: Response): Promise<void> {
    try {
      const atendimentos = await Atendimento.findAll();

      res.status(200).json(atendimentos);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erro ao buscar os atendimentos" });
    }
  }
}

