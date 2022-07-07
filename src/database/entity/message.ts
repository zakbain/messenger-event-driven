import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm"

@Entity()
export class Message {
  @PrimaryGeneratedColumn()
  id: number

  @Column("int")
  sourceUserId: number

  @Column("int")
  destUserId: number
}