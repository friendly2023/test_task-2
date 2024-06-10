import { Controller, Get } from '@nestjs/common';
import { UsersService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async getRoot(): Promise<string> {
    const usersWithProblems = await this.usersService.getUsersWithProblems();
    const usersWithoutProblems = await this.usersService.getUsersWithoutProblems();
    return `Пользователей с проблемой: ${usersWithProblems}
    Пользователей без проблем: ${usersWithoutProblems}`
    // return { usersWithProblems, usersWithoutProblems };
  }

  @Get('users/set-problems-to-false-and-get-count')
  async getUsersWithProblems(): Promise<number> {
    return this.usersService.getUsersWithProblems();
  }
}
