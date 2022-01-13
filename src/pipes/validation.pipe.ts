import { ArgumentMetadata, Injectable, PipeTransform } from "@nestjs/common";
import { ValidationExceptions } from "./../exceptions/validate.exceptions";
import { plainToClass } from "class-transformer";
import { validate } from "class-validator";

@Injectable()
export class ValidationPipe implements PipeTransform<any> {
  async transform(value: any, metadata: ArgumentMetadata) {
    const obj = plainToClass(metadata.metatype, value)
    const errors = await validate(obj)

    if (errors.length) {
      let messages = errors.map(err => {
        return `${err.property} - ${Object.values(err.constraints).join(', ')}`
      })
      throw new ValidationExceptions(messages)
    }
    return value
  }
}