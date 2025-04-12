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
      (expense) =>
        new ExpenseGetData({
          id: expense.id,
          description: expense.description,
          amount: expense.amount,
          category: expense.category,
          date: expense.date,
          createdAt: expense.createdAt,
        }),
    );
  }

  // Method to create an expense
  async createExpense(expenseData: ExpenseDto) {
    const expense = new ExpenseEntity(); // Changed to ExpenseEntity to save as entity
    expense.description = expenseData.description;
    expense.amount = expenseData.amount;
    expense.date = expenseData.date;
    expense.category = expenseData.category;
    return await this.expenseEntity.save(expense); // Saving the expense to the database
  }

  // Method to update an expense
  async updateExpense(id: string, expenseData: ExpenseDto) {
    const expense = await this.expenseEntity.findOne({ where: { id } });

    if (!expense) {
      throw new Error(`Expense with id ${id} not found`);
    }

    // Update the expense with new data
    expense.description = expenseData.description || expense.description;
    expense.amount = expenseData.amount || expense.amount;
    expense.date = expenseData.date || expense.date;
    expense.category = expenseData.category || expense.category;

    return await this.expenseEntity.save(expense); // Save updated expense back to the database
  }

  // Method to delete an expense
  async deleteExpense(id: string) {
    const expense = await this.expenseEntity.findOne({ where: { id } });

    if (!expense) {
      throw new Error(`Expense with id ${id} not found`); // Handle case when the expense doesn't exist
    }

    await this.expenseEntity.remove(expense); // Delete the expense from the database
    return `Expense with id ${id} has been deleted`; // Return a confirmation message
  }
}
