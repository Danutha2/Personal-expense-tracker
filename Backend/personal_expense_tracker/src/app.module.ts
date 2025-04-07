import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryModule } from './category/category.module';
import { ExpenseModule } from './expense/expense.module';

@Module({
  imports: [CategoryModule, ExpenseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
