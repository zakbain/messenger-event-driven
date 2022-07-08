import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm"

@Entity({name: 'message'})
export class Message {
  @PrimaryGeneratedColumn('increment', { type: 'bigint' })
  id: number;

  @Column("int")
  sourceUserId: number;

  @Column("int")
  destUserId: number;

  @Column("varchar")
  content: string;

  @CreateDateColumn({type: 'timestamp'})
  createdAt: Date;

  @Column({ type: "timestamp", nullable: true })
  readAt?: Date;
}