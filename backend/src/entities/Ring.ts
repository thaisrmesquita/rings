import { DataTypes, Model } from "sequelize";
import sequelize from "../database";

class Ring extends Model {
  public id!: number;
  public name!: string;
  public power!: string;
  public warrior!: string;
  public forgedBy!: string;
  public image!: string;
}

Ring.init(
  {
    name: { type: DataTypes.STRING, allowNull: false },
    power: { type: DataTypes.STRING, allowNull: false },
    warrior: { type: DataTypes.STRING, allowNull: false },
    forgedBy: { type: DataTypes.STRING, allowNull: false },
    image: { type: DataTypes.STRING, allowNull: false },
  },
  {
    sequelize,
    tableName: "rings",
  }
);

export default Ring;
