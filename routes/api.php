<?php

use Illuminate\Http\Request;

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('login','ApiController@login');
Route::post('logout','ApiController@logout');
Route::post('expenses','ExpenseController@getExpenses');