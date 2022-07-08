import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm"

@Entity()
export class Message {
  @PrimaryGeneratedColumn('increment', { type: 'bigint' })
  id: number;

  @Column("int")
  sourceUserId: number;

  @Column("int")
  destUserId: number;

  @Column("varchar")
  content: string;
}