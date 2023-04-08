import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Data, Prisma } from '@prisma/client';
import { CreateDataDto } from './dto/create-data.dto';
import { UpdateDataDto } from './dto/update-data.dto';

@Injectable()
export class DataService {
  constructor(private prisma: PrismaService) { }

  async getAll(): Promise<Data[]> {
    return this.prisma.data.findMany();
  }

  async getById(
    id: Prisma.DataWhereUniqueInput,
  ): Promise<Data | null> {
    return this.prisma.data.findUnique({
      where: id,
    });
  }

  async createData(data: CreateDataDto) {
    return this.prisma.data.create({
      data
    });
  }

  async updateData(params: {
    where: Prisma.DataWhereUniqueInput,
    data: UpdateDataDto
  }) {
    const { where, data } = params;
    return this.prisma.data.update({
      data,
      where,
    });
  }

  async deleteData(where: Prisma.DataWhereUniqueInput) {
    return this.prisma.data.delete({
      where,
    });
  }
}