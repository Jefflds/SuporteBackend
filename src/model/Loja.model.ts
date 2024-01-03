import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";

class Loja extends Model {
  public ID_Loja?: number;
  public Nome_Loja?: string;
}

Loja.init(
  {
    ID_Loja: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    Nome_Loja: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Loja",
    tableName: "Lojas", 
    timestamps: false,
  }
);

export default Loja;
