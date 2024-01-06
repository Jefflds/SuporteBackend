import { Request, Response } from "express";
import Anydesk from "../../model/Anydesk.model";

class ApagarAnydeskController {
  public async apagarAnydesk(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;

      if (!id) {
        res.status(400).json({ error: "ID do Anydesk é obrigatório" });
        return;
      }

      let cliente = await Anydesk.findByPk(id);

      if (!cliente) {
        res.status(404).json({ error: "Anydesk não encontrado" });
        return;
      }

      await cliente.destroy();

      res.status(200).json({ message: "Anydesk apagado com sucesso" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erro ao apagar o Anydesk" });
    }
  }
}

export default ApagarAnydeskController;
