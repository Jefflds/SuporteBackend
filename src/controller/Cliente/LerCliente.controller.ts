import { Request, Response, Router } from "express";
import Cliente from "../../model/Cliente.model";

export class LerClienteController {
  public path = "/api/cliente/:id?";
  public router = Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(this.path, this.LerCliente.bind(this));
  }

  public async LerCliente(req: Request, res: Response): Promise<void> {
    try {
      if (req.params.id) {
        const clienteId = req.params.id;
        const cliente = await Cliente.findByPk(clienteId);

        if (!cliente) {
          res.status(404).json({ error: "Cliente não encontrado" });
          return;
        }

        res.status(200).json(cliente);
      } else {
        const clientes = await Cliente.findAll();

        if (clientes.length === 0) {
          res.status(404).json({ error: "Nenhum Anydesk encontrado" });
          return;
        }
        
        res.status(200).json(clientes);
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erro ao buscar os clientes" });
    }
  }
}
