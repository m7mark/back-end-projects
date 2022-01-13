import { IsNumber, IsString } from "class-validator"

export class BanUserDto {
  @IsString({ message: 'Must be string' })
  readonly banReason: string
  @IsNumber({}, { message: 'Must be number' })
  readonly userId: number
}