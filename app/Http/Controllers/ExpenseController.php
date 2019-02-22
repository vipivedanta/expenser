<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Exception;
use App\Models\Expense;
use Auth;
use App\User;

class ExpenseController extends Controller
{
    
    /**
     * Get all expense for the logged in user
     * @param null
     * @return expense object
     */
    public function getExpenses(Request $request){
        try{

            if($request->has('filter')){
                $expenses = Expense::whereNull('deleted_at');
                if($request->filter['date'] != ''){
                    $date = date('Y-m-d',strtotime($request->filter['date']));
                    $expenses = $expenses->whereDate('expense_date','=',$date);
                }
               
                if($request->filter['expense'] != null)
                    $expenses = $expenses->where('expense','like','%'.$request->filter['expense'].'%');                

                $expenses = $expenses->get();

            }else{
                $expenses = Expense::all();
            }

            return response()->json([
                'status' => true,
                'expenses' => $expenses
            ],200);

        }catch(Exception $e){
            return response()->json([
                'status' => false,
                'error' => $e->getMessage()
            ],402);
        }
    }

    /**
     * Save new expense
     * @param expense object
     * @return json
     */
    public function saveExpense( Request $request ){
        try{

            $expense = new Expense;
            $expense->expense = $request->expense;
            $expense->amount = $request->amount;
            $expense->expense_date = $request->date;
            $expense->comments = $request->comment;
            $expense->user_id = 1;
            $expense->save();

            return response()->json([
                'status' => true,
                'msg' => 'Expense data has been saved successfully',
                'expense' => $expense
            ]);

        }catch(Exception $e){
            return response()->json([
                'status' => false,
                'error' => $e->getMessage()
            ]);
        }
    }
}
