import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateMessageDto, MessageService } from './message.service';

@Controller('messages')
export class MessageController {
  constructor(private readonly messageService: MessageService) { }

  @Get()
  getAll() {
    return this.messageService.getAll();
  }

  @Get(':id')
  getById(id: number) {
    return this.messageService.getById(id);
  }

  @Post()
  createUser(@Body() createUserDto: CreateMessageDto) {
    return this.messageService.create(createUserDto);
  }
}
