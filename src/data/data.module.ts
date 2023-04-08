import { Module } from '@nestjs/common';
import { DataController } from './data.controller';
import { DataService } from './data.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [DataController],
  providers: [DataService, PrismaService]
})
export class DataModule { }
