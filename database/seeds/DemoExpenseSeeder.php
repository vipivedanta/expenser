<?php

use Illuminate\Database\Seeder;
use App\Models\Expense;

class DemoExpenseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $expense = new Expense;
        $expense->expense_date = date('Y-m-d');
        $expense->expense = 'Morning Tea';
        $expense->comments = 'from canteen';
        $expense->amount = 20.00;
        $expense->user_id = 1;
        $expense->save();

        $expense = new Expense;
        $expense->expense_date = date('Y-m-d');
        $expense->expense = 'Lunch';
        $expense->comments = 'Ifthar via Swiggy';
        $expense->amount = 160.00;
        $expense->user_id = 1;
        $expense->save();
    }
}
