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
            
            $expenses = Expense::all();

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
}
