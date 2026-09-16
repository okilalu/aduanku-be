import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService) {}

  register(name: string, email: string, passwordHash: string) {
    return this.prisma.user.create({
      data: {
        name,
        email,
        passwordHash,
      },
    });
  }
  login(email: string, passwordHash: string) {
    return this.prisma.user.findUnique({
      where: {
        email,
        passwordHash,
      },
    });
  }

  delete(id: string) {
    return this.prisma.user.delete({
      where: {
        id,
      },
    });
  }
}
