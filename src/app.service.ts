import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from './service/prisma.service';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}
  private readonly logger = new Logger(AppService.name)


  async getHello(): Promise<string> {
    return 'Hello World!';
  }
}
