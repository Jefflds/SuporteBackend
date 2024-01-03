import { Request, Response } from "express";
import Loja from "../../model/Loja.model";

export class CadastrarLojaController {
  public async cadastrarLoja(req: Request, res: Response): Promise<void> {
    try {
      const { Nome_Loja } = req.body;
      if (!Nome_Loja) {
        res.status(400).json({ error: "Nome da loja é obrigatório" });
        return;
      }
      const novaLoja = await Loja.create({ Nome_Loja });
      res
        .status(201)
        .json({ ID_Loja: novaLoja.ID_Loja, Nome_Loja: novaLoja.Nome_Loja });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erro ao cadastrar a loja" });
    }
  }
}
