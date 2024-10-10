import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 40 })
  email: string;

  @Column({ type: 'varchar' })
  password: string;

  @Column({ type: 'varchar', length: 30 })
  name: string;

  @Column({ type: 'enum', enum: ['Male', 'Female'] })
  gender: string;

  @Column({ type: 'timestamp', default: new Date() })
  createdat: Date;

  @Column({ type: 'timestamp', default: new Date() })
  updatedat: Date;
}
