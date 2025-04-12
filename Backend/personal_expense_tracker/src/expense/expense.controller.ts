import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ExpenseDto } from './DTO/expense.dto';
import { ExpenseService } from './expense.service';

@Controller('expense')
export class ExpenseController {
  constructor(private expenseService: ExpenseService) {}
  //Endpoint for get all expenses
  @Get('/get-all-expenses')
  getAllExpenses() {
    const response = this.expenseService.getAllExpenses();
    return response;
  }

  //Endpoint for Create an expense
  @Post('/create-expense')
  createExpense(@Body() expenseData: ExpenseDto) {
    const response = this.expenseService.createExpense(expenseData);
    return response;
  }

  //Endpoint for Update an expense
  @Put('/update-expense')
  updateExpense(@Param('id') id: string, @Body() expenseData: ExpenseDto) {
    const response = this.expenseService.updateExpense(id, expenseData);
    return response;
  }

  //Endpoint for Delete an expense
  @Delete('/delete-expense')
  deleteExpense(@Param('id') id: string) {
    const response = this.expenseService.deleteExpense(id);
    return response;
  }
}
