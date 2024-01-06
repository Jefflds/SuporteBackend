import { Request, Response } from "express";
import Cliente from "../../model/Cliente.model";
import Loja from "../../model/Loja.model";

export class cadastrarClienteController {
  public async cadastrarCliente(req: Request, res: Response): Promise<void> {
    try {
      const { Nome_Cliente, Telefone_Cliente, Nome_Loja } = req.body;

      if (!Nome_Cliente || !Telefone_Cliente || !Nome_Loja) {
        res.status(400).json({
          error:
            "Nome do Cliente, telefone do Cliente e Nome da Loja são obrigatórios",
        });
        return;
      }

      const loja = await Loja.findOne({ where: { Nome_Loja } });

      if (!loja) {
        res.status(404).json({ error: "Loja não encontrada" });
        return;
      }

      const novoCliente = await Cliente.create({
        Nome_Cliente,
        Telefone_Cliente,
        ID_Loja: loja.ID_Loja,
      });

      if (novoCliente) {
        res.status(201).json({
          ID_Cliente: novoCliente.ID_Cliente,
          Nome_Cliente: novoCliente.Nome_Cliente,
          Telefone_Cliente: novoCliente.Telefone_Cliente,
          ID_Loja: novoCliente.ID_Loja,
          success: true, 
        });
      } else {
        res.status(500).json({ error: "Erro ao cadastrar Cliente" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erro ao cadastrar Cliente" });
    }
  }
}
