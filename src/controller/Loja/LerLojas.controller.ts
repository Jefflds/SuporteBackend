import { Request, Response } from "express";
import Loja from "../../model/Loja.model";

export class LerLojaController {
  public async LerLoja(req: Request, res: Response): Promise<void> {
    try {
      const lojas = await Loja.findAll();

      res.status(200).json(lojas);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erro ao buscar as lojas" });
    }
  }
}
