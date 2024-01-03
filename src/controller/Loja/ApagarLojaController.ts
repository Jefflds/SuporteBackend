import { Request, Response } from "express";
import Loja from "../../model/Loja.model";

export class ApagarLojaController {
  public async apagarLoja(req: Request, res: Response): Promise<void> {
    try {
      const { id, nome } = req.params;

     
      if (!id && !nome) {
        res.status(400).json({ error: "ID ou Nome da loja é obrigatório" });
        return;
      }

      let loja;

      if (id) {
        loja = await Loja.findByPk(id);
      } else {
       
        loja = await Loja.findOne({ where: { Nome_Loja: nome } });
      }

      if (!loja) {
        res.status(404).json({ error: "Loja não encontrada" });
        return;
      }

      await loja.destroy();

      res.status(200).json({ message: "Loja apagada com sucesso" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erro ao apagar a loja" });
    }
  }
}
