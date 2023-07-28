import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm"
import Contact from "./contact.entitie"

@Entity("users")
class User {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column({ type: "varchar" })
  name: string

  @Column({ type: "varchar", unique: true })
  email: string

  @Column({ type: "varchar" })
  password: string

  @Column({ type: "varchar" })
  telephone: string

  @CreateDateColumn({ type: "date" })
  created_at: Date

  @OneToMany(() => Contact, (contact) => contact.user)
  contact: Contact[]
}

export default User
