import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";
import Loja from "./Loja.model";

class Anydesk extends Model {
  public ID_Anydesk?: number;
  public Numero_Anydesk?: string;
  public ID_Loja?: string;
}

Anydesk.init(
  {
    ID_Anydesk: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    Numero_Anydesk: {
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
    modelName: "Anydesk",
    tableName: "Anydesk",
    timestamps: false,
  }
);

export default Anydesk;
