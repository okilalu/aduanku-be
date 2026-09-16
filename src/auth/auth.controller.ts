import { Controller, Delete, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service.js';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register(name: string, email: string, passwordHash: string) {
    return this.authService.register(name, email, passwordHash);
  }

  @Get('login')
  login(email: string, passwordHash: string) {
    return this.authService.login(email, passwordHash);
  }

  @Delete('delete/:id')
  delete(id: string) {
    return this.authService.delete(id);
  }
}
