import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import User from "./user.entities";

@Entity("contacts")
class Contact {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({type: "varchar"})
  name: string

  @Column({type: "varchar"})
  email: string

  @Column({type: "varchar"})
  telephone: string

  @CreateDateColumn({type: "date"})
  created_at: Date

  @ManyToOne(() => User, (user) => user.contact)
  user: User
}

export default Contact