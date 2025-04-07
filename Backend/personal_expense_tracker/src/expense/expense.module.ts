import { Module } from '@nestjs/common';
import { ExpenseController } from './expense.controller';
import { ExpenseService } from './expense.service';
import { ExpenseEntity } from './Entity/Expense.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ExpenseEntity])],
  controllers: [ExpenseController],
  providers: [ExpenseService],
})
export class ExpenseModule {}
