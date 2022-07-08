import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto, UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) { }
  
  @Get()
  getAll() {
    return this.userService.getAll();
  }

  @Get(':id')
  getById(id: number) {
    return this.userService.getById(id);
  }
  
  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }
}
