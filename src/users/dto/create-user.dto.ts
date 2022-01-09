import { ApiProperty } from "@nestjs/swagger"

export class CreateUserDto {
  @ApiProperty({ example: 'example@email.com', description: 'Uniq email' })
  readonly email: string
  @ApiProperty({ example: 'qwerty', description: 'Password' })
  readonly password: string
}