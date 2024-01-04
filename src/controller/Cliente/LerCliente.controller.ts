import { Request, Response } from "express";
import Cliente from "../../model/Cliente.model";

export class LerClienteController {
  public async LerCliente(req: Request, res: Response): Promise<void> {
    try {
      const clientes = await Cliente.findAll();

      res.status(200).json(clientes);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erro ao buscar os clientes" });
    }
  }
}
