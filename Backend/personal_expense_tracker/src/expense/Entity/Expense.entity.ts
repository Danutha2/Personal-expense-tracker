import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class ExpenseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  description: string;

  @Column()
  amount: string;

  @Column()
  category: string;

  @Column()
  date: Date;

  @CreateDateColumn()
  createdAt: Date;
}
