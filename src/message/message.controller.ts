import { Body, Controller, Get, HttpException, HttpStatus, Param, Post, Query } from '@nestjs/common';
import { CreateMessageDto, MessageService } from './message.service';

@Controller('messages')
export class MessageController {
  constructor(private readonly messageService: MessageService) { }

  @Get()
  getAll() {
    return this.messageService.getAll();
  }

  @Get('history')
  async getMessageHistory(@Query() query: any) {
    const userIds = query.id as number[];
    if (userIds.length != 2) {
      throw new HttpException('expected 2 ids', HttpStatus.BAD_REQUEST);
    } 
    return await this.messageService.getBetween(userIds[0], userIds[1]);
  }

  @Get(':id')
  getById(@Param('id') id: number) {
    return this.messageService.getById(id);
  }

  @Post()
  createUser(@Body() createUserDto: CreateMessageDto) {
    return this.messageService.create(createUserDto);
  }
}
