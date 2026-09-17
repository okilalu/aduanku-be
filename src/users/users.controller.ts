import { Controller, Delete, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service.js';

@Controller('user')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
}
