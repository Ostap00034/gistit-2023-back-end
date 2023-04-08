import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { DataService } from './data.service';
import { CreateDataDto } from './dto/create-data.dto';
import { UpdateDataDto } from './dto/update-data.dto';
import { Prisma } from '@prisma/client';

@Controller('data')
export class DataController {
  constructor(private readonly dataService: DataService) {

  }

  @Get()
  async getAll() {
    return this.dataService.getAll()
  }

  @Post()
  async createData(@Body() dto: CreateDataDto) {
    return this.dataService.createData(dto)
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    return this.dataService.getById({ id: Number(id) })
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() dto: UpdateDataDto) {
    return this.dataService.updateData({
      where: { id: Number(id) },
      data: dto,
    });
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.dataService.deleteData({ id: Number(id) })
  }
}
