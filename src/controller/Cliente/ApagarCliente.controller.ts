import { Request, Response } from "express";
import Cliente from "../../model/Cliente.model";

class ApagarClienteController {
  public async apagarCliente(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;

      if (!id) {
        res.status(400).json({ error: "ID do Cliente é obrigatório" });
        return;
      }

      let cliente = await Cliente.findByPk(id);
  
      if (!cliente) {
        res.status(404).json({ error: "Cliente não encontrado" });
        return;
      }

      await cliente.destroy();

      res.status(200).json({ message: "Cliente apagado com sucesso" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erro ao apagar o Cliente" });
    }
  }
}


export default ApagarClienteController;