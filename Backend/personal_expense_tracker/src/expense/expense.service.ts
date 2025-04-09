import { Injectable } from '@nestjs/common';
import { ExpenseDto } from './DTO/expense.dto';
import { ExpenseEntity } from './Entity/Expense.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ExpenseGetData } from './DTO/expenseGetData';

@Injectable()
export class ExpenseService {
  constructor(
    @InjectRepository(ExpenseEntity)
    private readonly expenseEntity: Repository<ExpenseEntity>, // Injecting the ExpenseEntity
  ) {}

  // Method to get all expenses
  async getAllExpenses() {
    const expenses = await this.expenseEntity.find(); // Fetching all expenses from the database
    return expenses.map(
      (expenses) =>
        new ExpenseGetData({
          id: expenses.id,
          description: expenses.description,
          amount: expenses.amount,
          category: expenses.category,
          date: expenses.date,
          createdAt: expenses.createdAt,
        }),
    );
  }

  // Method to create an expense
  async createExpense(expenseData: ExpenseDto) {
    const expense = new ExpenseDto();
    expense.description = expenseData.description;
    expense.amount = expenseData.amount;
    expense.date = expenseData.date;
    expense.category = expenseData.category;
    return await this.expenseEntity.save(expense); // Saving the expense to the database
  }

  // Method to update an expense
  async updateExpense(id: string) {
    const expense = await this.expenseEntity.findOne({ where: { id } });

    
  }

  // Method to delete an expense
  deleteExpense(id: string) {
    return `Delete an expense with id: ${id}`;
  }
}
