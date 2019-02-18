<?php

use Illuminate\Http\Request;

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('login',function(){
    return response()->json([
        'status' => true,
        'access_token' => 82993938933893
    ],200);
});