import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Message } from 'src/database/entities';
import { Repository } from 'typeorm';

export type CreateMessageDto = Omit<Message, 'id' | 'createdAt'>;

@Injectable()
export class MessageService {
  constructor(
    @InjectRepository(Message)
    private readonly messageRepository: Repository<Message>,
  ) { }

  async getAll() {
    return await this.messageRepository.find();
  }

  async getById(id: number) {
    return await this.messageRepository.findOneBy({ id });
  }

  async create(createUserDto: CreateMessageDto) {
    const userToCreate = this.messageRepository.create(createUserDto);
    return await this.messageRepository.save(userToCreate);
  }
}
