import { ApiProperty } from "@nestjs/swagger"
import { IsNumber, IsString } from "class-validator"

export class BanUserDto {
  @ApiProperty({ example: 'Simple ban', description: 'Ban reason' })
  @IsString({ message: 'Must be string' })
  readonly banReason: string
  @ApiProperty({ example: '11', description: 'Unique User id' })
  @IsNumber({}, { message: 'Must be number' })
  readonly userId: number
}