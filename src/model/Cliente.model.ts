import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";
import Loja from "./Loja.model";

class Cliente extends Model {
  public ID_Cliente?: number;
  public Nome_Cliente?: string;
  public Telefone_Cliente?: string;
  public ID_Loja?: number;
}

Cliente.init(
  {
    ID_Cliente: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    Nome_Cliente: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Telefone_Cliente: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ID_Loja: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Loja,
        key: "ID_Loja",
      },
    },
  },
  {
    sequelize,
    modelName: "Cliente",
    tableName: "Cliente",
    timestamps: false,
  }
);

export default Cliente;
