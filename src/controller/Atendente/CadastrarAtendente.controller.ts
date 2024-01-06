import { Request, Response } from "express";
import Atendente from "../../model/Atendente.model";


export class cadastrarAtendenteController {
  public async cadastrarAtendente(req: Request, res: Response): Promise<void> {
    try {
      const { Nome_Atendente, Funcao_Atendente } = req.body;

      if (!Nome_Atendente || !Funcao_Atendente) {
        res.status(400).json({
          error: "Nome do Atendente e Função são obrigatórios",
        });
        return;
      }

      const novoAtendente = await Atendente.create({
        Nome_Atendente,
        Funcao_Atendente,
      });

      if (Atendente) {
        res.status(201).json({
          Nome_Atendente: novoAtendente.Nome_Atendente,
          Funcao_Atendente: novoAtendente.Funcao_Atendente,
          success: true,
        });
      } else {
        res.status(500).json({ error: "Erro ao cadastrar Atendente" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erro ao cadastrar Atendente" });
    }
  }
}
