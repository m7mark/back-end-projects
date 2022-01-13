import { ApiProperty } from "@nestjs/swagger"
import { IsEmail, IsString, Length } from "class-validator"

export class CreateUserDto {
  @ApiProperty({ example: 'example@email.com', description: 'Uniq email' })
  @IsString({ message: 'Must be string' })
  @IsEmail({}, { message: 'Must be E-mail' })
  readonly email: string
  @ApiProperty({ example: 'qwerty', description: 'Password' })
  @IsString({ message: 'Must be string' })
  @Length(4, 16, { message: 'Between 4-16 symbols' })
  readonly password: string
}