import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryModule } from './category/category.module';
import { ExpenseModule } from './expense/expense.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExpenseEntity } from './expense/Entity/Expense.entity';
import { CategoryEntity } from './category/Entity/category.entity';

@Module({
  imports: [
    CategoryModule,
    ExpenseModule,
    TypeOrmModule.forRoot({
      type: 'mysql', // Database type
      host: 'localhost', // Database host
      port: 3307, // MySQL default port
      username: 'root', // Your database username
      password: '659727pegeout', // Your database password
      database: 'personal_expense_tracker', // Your database name
      entities: [ExpenseEntity, CategoryEntity], // List of your entities
      synchronize: true, // Set to false in production
    }),
    TypeOrmModule.forFeature([ExpenseEntity, CategoryEntity]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
