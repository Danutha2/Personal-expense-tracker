export class ExpenseGetData {
  constructor(partial: Partial<ExpenseGetData>) {
    Object.assign(this, partial);
  }
  id: string;
  description: string;
  amount: number;
  category: string;
  date: Date;
  createdAt: Date;
}
