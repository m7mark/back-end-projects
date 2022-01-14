import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateRoleDto } from './dto/create-role.dto';
import { Role } from './roles.model'

@Injectable()
export class RolesService {
  constructor(@InjectModel(Role) private roleRepository: typeof Role) { }
  async createRole(dto: CreateRoleDto) {
    try {
      const role = await this.roleRepository.create(dto)
      return role
    } catch {
      throw new HttpException('Role must be unique', HttpStatus.PRECONDITION_FAILED)
    }
  }
  async getRoleByValue(value: string) {
    const role = await this.roleRepository.findOne({ where: { value } })
    return role
  }

}
