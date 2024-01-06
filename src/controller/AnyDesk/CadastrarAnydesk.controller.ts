import { Request, Response } from "express";
import Anydesk from "../../model/Anydesk.model";
import Loja from "../../model/Loja.model";

export class cadastrarAnydeskController {
  public async cadastrarAnydesk(req: Request, res: Response): Promise<void> {
    try {
      const { Numero_Anydesk, Nome_Loja } = req.body;

      if (!Numero_Anydesk  || !Nome_Loja) {
        res.status(400).json({
          error:
            "Número do Anydesk e Nome da Loja são obrigatórios",
        });
        return;
      }

      const loja = await Loja.findOne({ where: { Nome_Loja } });

      if (!loja) {
        res.status(404).json({ error: "Loja não encontrada" });
        return;
      }

      const novoAnydesk = await Anydesk.create({
        Numero_Anydesk,
        ID_Loja: loja.ID_Loja,
      });

      if (Anydesk) {
        res.status(201).json({
          Numero_Anydesk: novoAnydesk.Numero_Anydesk,
          ID_Loja: novoAnydesk.ID_Loja,
          success: true,
        });
      } else {
        res.status(500).json({ error: "Erro ao cadastrar Anydesk" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erro ao cadastrar Anydesk" });
    }
  }
}
