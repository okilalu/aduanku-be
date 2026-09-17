import { ConflictException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { RegisterDto } from './dto/register.dto.js';
import { UsersService } from '../users/users.service.js';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}
  // constructor(private readonly prisma: PrismaService) {}

  async register(registerDto: RegisterDto) {
    const { name, email, password } = registerDto;
    const userExists = await this.usersService.findByEmail(email);
    if (userExists) {
      throw new ConflictException('Email already exists');
    }

    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(password, saltRounds);

    const newUser = await this.usersService.createUser(
      name,
      email,
      passwordHash,
    );

    const payload = { email: newUser.email, sub: newUser.id };
    const token = this.jwtService.sign(payload);

    return {
      message: 'User registered successfully',
      access_token: token,
    };
  }

  // login(email: string, passwordHash: string) {
  //   return this.prisma.user.findUnique({
  //     where: {
  //       email,
  //       passwordHash,
  //     },
  //   });
  // }

  delete(id: string) {
    return this.usersService.deleteUser(id);
  }
}
