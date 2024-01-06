import { Request, Response } from "express";
import Atendimento from "../../model/Atendimento.model";

class ApagarAtendimentoController {
  public async apagarAtendimento(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;

      if (!id) {
        res.status(400).json({ error: "ID do Atendimento é obrigatório" });
        return;
      }

      let atendimento = await Atendimento.findByPk(id);

      if (!atendimento) {
        res.status(404).json({ error: "Atendimento não encontrado" });
        return;
      }

      await atendimento.destroy();

      res.status(204).json({ message: "Atendimento apagado com sucesso" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erro ao apagar o Atendimento" });
    }
  }
}

export default ApagarAtendimentoController;
