import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) { }

  async getAll() {
    return this.prisma.user.findMany();
  }

  async getByEmail(
    email: string,
  ) {
    const user = this.prisma.user.findUnique({
      where: {
        email
      }
    });

    return user
  }

  async createUser(data: CreateUserDto) {
    return this.prisma.user.create({
      data
    });
  }

  async updateUser(params: {
    where: Prisma.UserWhereUniqueInput,
    data: UpdateUserDto
  }) {
    const { where, data } = params;
    return this.prisma.user.update({
      where, data
    });
  }

  async deleteUser(where: Prisma.UserWhereUniqueInput) {
    return this.prisma.user.delete({
      where,
    });
  }
}