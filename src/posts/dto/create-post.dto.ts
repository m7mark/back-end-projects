import { ApiProperty } from "@nestjs/swagger"
import { IsEmail, IsNumber, IsString, Length } from "class-validator"

export class CreatePostDto {
  @ApiProperty({ example: 'Title', description: 'Post title' })
  @IsString({ message: 'Must be string' })
  readonly title: string
  @ApiProperty({ example: 'Content', description: 'Content part' })
  @IsString({ message: 'Must be string' })
  readonly content: string
  @ApiProperty({ example: '11', description: 'Unique User id' })
  readonly userId: number
}