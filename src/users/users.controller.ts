// src/users/users.controller.ts

import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async createUser(@Body() body: { name: string; email: string }) {
    return this.usersService.createUser(body.name, body.email);
  }
  // https://randomuser.me/api/?results=10&inc=name,gender,email,nat,picture&noinfo
  @Get()
  async getUsers() {
    return this.usersService.getAllUsers();
  }
}
