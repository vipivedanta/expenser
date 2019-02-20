<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\LoginRequest;
use Exception;
use Auth;

class ApiController extends Controller
{   

    /**
     *  Login function
     * @param email,password
     * @return json
     */
    public function login(LoginRequest $request){

        try{

            $var = Auth::attempt([
                'email' => $request->email,
                'password' => $request->password
            ]);

            if($var){
                return response()->json([
                    'status' => true,
                    'user' => Auth::user()

                ],200);            
            }else{
                return response()->json([
                    'status' => false,
                    'error' => 'Invalid username or password'
                ],200);
            }
            
        }catch(Exception $e){
            return response()->json([
                'status' => false,
                'error' => $e->getMessage()
            ],201);
        }
    }

    /**
     * Logout function
     * @param void
     * @return Void
     */
    public function logout(){
        try{
            Auth::logout();
            return response()->json([
                'status' => true,
                'message' => 'You are successfully logged out'
            ]);

        }catch(Exception $e){
            return response()->json([
                'status' => false,
                'error' => $e->getMessage()
            ],401);
        }
    }
}
