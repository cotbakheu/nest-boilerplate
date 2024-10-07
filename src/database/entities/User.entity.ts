import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
// import { v4 as uuidv4 } from 'uuid'

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @Column({})
  password: string

  @Column({ unique: true })
  username: string
}
