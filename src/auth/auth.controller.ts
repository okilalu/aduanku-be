import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { AuthService } from './auth.service.js';
import { RegisterDto } from './dto/register.dto.js';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register(@Body() registerDto: RegisterDto) {
    return this.authService.register(registerDto);
  }

  // @Get('login')
  // login(email: string, passwordHash: string) {
  //   return this.authService.login(email, passwordHash);
  // }

  // @Delete('delete/:id')
  // delete(id: string) {
  //   return this.authService.delete(id);
  // }
  @Delete('delete/:id')
  delete(@Param('id') id: string) {
    return this.authService.delete(id);
  }
}
