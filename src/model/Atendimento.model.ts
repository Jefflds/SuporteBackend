import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";
import Loja from "./Loja.model";
import Cliente from "./Cliente.model";
import Anydesk from "./Anydesk.model";
import Atendente from "./Atendente.model";

class Atendimento extends Model {
  public ID_Atendimento?: number;
  public ID_Cliente?: number;
  public ID_Loja?: number;
  public ID_Anydesk?: number;
  public Qual_Problema?: string;
  public ID_Atendente?: number;
  public Status?: "concluido" | "em_resolucao" | "pendente";
  public Categoria_Atendimento?:
    | "Techsapp"
    | "Lifix"
    | "Kuiper"
    | "A7"
    | "SevenShop"
    | "Comercial"
    | " Financeiro";
}

Atendimento.init(
  {
    ID_Atendimento: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    ID_Cliente: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Cliente,
        key: "ID_Cliente",
      },
    },
    ID_Loja: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Loja,
        key: "ID_Loja",
      },
    },
    ID_Anydesk: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Anydesk,
        key: "ID_Anydesk",
      },
    },
    Qual_Problema: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ID_Atendente: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Atendente,
        key: "ID_Atendente",
      },
    },
    Status: {
      type: DataTypes.ENUM("concluido", "em_resolucao", "pendente"),
      allowNull: false,
    },
    Categoria_Atendimento: {
      type: DataTypes.ENUM(
        "Techsapp",
        "Lifix",
        "Kuiper",
        "A7",
        "SevenShop",
        "Comercial",
        "Financeiro"
      ),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Atendimento",
    tableName: "Atendimento",
    timestamps: true,
  }
);

export default Atendimento;
