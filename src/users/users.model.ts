import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table } from "sequelize-typescript";

interface UserCreationAttributes {
  email: string,
  password: string
}
@Table({ tableName: 'users' })
export class User extends Model<User, UserCreationAttributes> {
  @ApiProperty({ example: '1', description: 'Uniq ID' })
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;
  @ApiProperty({ example: 'example@email.com', description: 'Uniq email' })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  email: string;
  @ApiProperty({ example: 'qwerty', description: 'Password' })
  @Column({ type: DataType.STRING, allowNull: false })
  password: string;
  @ApiProperty({ example: 'false', description: 'Banned or not' })
  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  banned: boolean;
  @ApiProperty({ example: 'Bad situation', description: 'Ban reason' })
  @Column({ type: DataType.STRING, allowNull: true })
  banReason: string;
}