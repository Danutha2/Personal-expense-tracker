import { Injectable } from '@nestjs/common';
import { ExpenseDto } from './DTO/expense.dto';

@Injectable()
export class ExpenseService {
  // Method to get all expenses
  getAllExpenses() {
    return 'Get all expenses';
  }

  // Method to create an expense
  createExpense(expenseData: ExpenseDto) {
    return `Create an expense with name: ${expenseData.name}, amount: ${expenseData.amount}, date: ${expenseData.date}, category: ${expenseData.category}`;
  }

  // Method to update an expense
  updateExpense(id: string) {
    return `Update an expense with id: ${id}`;
  }

  // Method to delete an expense
  deleteExpense(id: string) {
    return `Delete an expense with id: ${id}`;
  }
}
