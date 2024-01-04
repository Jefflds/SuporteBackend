import { Request, Response } from "express";
import Atendente from "../../model/Atendente.model";

class ApagarAtendenteController {
  public async apagarAtendente(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;

      if (!id) {
        res.status(400).json({ error: "ID do Atendente é obrigatório" });
        return;
      }

      let cliente = await Atendente.findByPk(id);

      if (!cliente) {
        res.status(404).json({ error: "Atendente não encontrado" });
        return;
      }

      await cliente.destroy();

      res.status(200).json({ message: "Atendente apagado com sucesso" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erro ao apagar o Atendente" });
    }
  }
}

export default ApagarAtendenteController;
