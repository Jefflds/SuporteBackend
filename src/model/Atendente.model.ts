import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";

class Atendente extends Model {
  public ID_Atendente?: number;
  public Nome_Atendente?: string;
  public Funcao_Atendente?: string;
}

Atendente.init(
  {
    ID_Atendente: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    Nome_Atendente: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Funcao_Atendente: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Atendente",
    tableName: "Atendente",
    timestamps: false,
  }
);

export default Atendente;
