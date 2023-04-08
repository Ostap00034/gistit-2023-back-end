import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';


@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {

  }

  @Get()
  async getAll() {
    return this.userService.getAll()
  }

  @Post()
  async create(@Body() dto: CreateUserDto) {
    return this.userService.createUser(dto)
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    return this.userService.getById({ id: Number(id) })
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() dto: UpdateUserDto) {
    return this.userService.updateUser({ where: { id: Number(id) }, data: dto })
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.userService.deleteUser({ id: Number(id) })
  }
}
