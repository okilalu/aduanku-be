import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async findByEmail(email: string) {
    return await this.prisma.user.findUnique({
      where: {
        email,
      },
    });
  }

  async createUser(name: string, email: string, passwordHash: string) {
    return await this.prisma.user.create({
      data: {
        name,
        email,
        passwordHash,
      },
    });
  }

  async deleteUser(id: string) {
    return await this.prisma.user.delete({
      where: {
        id,
      },
    });
  }
}
