import { ApiProperty } from "@nestjs/swagger"
import { IsString } from "class-validator"

export class CreateRoleDto {
  @ApiProperty({ example: 'USER', description: 'Role name' })
  @IsString({ message: 'Must be string' })
  readonly value: string
  @ApiProperty({ example: 'User', description: 'Role description' })
  @IsString({ message: 'Must be string' })
  readonly description: string
}