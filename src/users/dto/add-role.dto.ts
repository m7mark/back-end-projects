import { ApiProperty } from "@nestjs/swagger"
import { IsNumber, IsString } from "class-validator"

export class AddRoleDto {
  @ApiProperty({ example: 'ADMIN', description: 'Role name' })
  @IsString({ message: 'Must be string' })
  readonly value: string
  @ApiProperty({ example: '11', description: 'Unique User id' })
  @IsNumber({}, { message: 'Must be number' })
  readonly userId: number
}