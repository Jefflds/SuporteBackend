import { Request, Response } from "express";
import Atendimento from "../../model/Atendimento.model";
import Cliente from "../../model/Cliente.model";
import Loja from "../../model/Loja.model";
import Anydesk from "../../model/Anydesk.model";
import Atendente from "../../model/Atendente.model";

class CadastrarAtendimentoController {
  public async CadastrarAtendimento(
    req: Request,
    res: Response
  ): Promise<void> {
    try {
      const {
        ClienteIdentifier,
        LojaIdentifier,
        AnydeskIdentifier,
        AtendenteIdentifier,
        Qual_Problema,
        Status,
        Categoria_Atendimento,
      } = req.body;

      const cliente =
        await CadastrarAtendimentoController.findEntityByIdentifier(
          Cliente,
          ClienteIdentifier
        );
      const loja = await CadastrarAtendimentoController.findEntityByIdentifier(
        Loja,
        LojaIdentifier
      );
      const anydesk =
        await CadastrarAtendimentoController.findEntityByIdentifier(
          Anydesk,
          AnydeskIdentifier
        );
      const atendente =
        await CadastrarAtendimentoController.findEntityByIdentifier(
          Atendente,
          AtendenteIdentifier
        );

      if (!cliente || !loja  || !atendente) {
        res
          .status(404)
          .json({ error: "Cliente/Loja/Atendente não encontrados" });
        return;
      }

      const novoAtendimento = await Atendimento.create({
        ID_Cliente: cliente.ID_Cliente,
        ID_Loja: loja.ID_Loja,
        ID_Anydesk: anydesk.ID_Anydesk,
        Qual_Problema,
        ID_Atendente: atendente.ID_Atendente,
        Status,
        Categoria_Atendimento,
      });

      if (novoAtendimento) {
        res.status(201).json({
          ID_Cliente: novoAtendimento.ID_Cliente,
          ID_Loja: novoAtendimento.ID_Loja,
          ID_Anydesk: novoAtendimento.ID_Anydesk,
          Qual_Problema: novoAtendimento.Qual_Problema,
          ID_Atendente: novoAtendimento.ID_Atendente,
          Status: novoAtendimento.Status,
          Categoria_Atendimento: novoAtendimento.Categoria_Atendimento,
          success: true,
        });
      } else {
        res.status(500).json({ error: "Erro ao cadastrar Atendimento" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erro ao cadastrar o Atendimento" });
    }
  }

  private static async findEntityByIdentifier(
    model: any,
    identifier: string | number
  ) {
    const isNumeric = !isNaN(Number(identifier));
    const field = isNumeric
      ? "ID_" + model.name
      : model.name === "Anydesk"
      ? "Numero_Anydesk"
      : "Nome_" + model.name;
    const whereCondition = isNumeric
      ? { [field]: Number(identifier) }
      : { [field]: identifier };
    return await model.findOne({ where: whereCondition });
  }
}

export default CadastrarAtendimentoController;
