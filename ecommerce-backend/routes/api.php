<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\PostController;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return 'api';
});



Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::apiResource('posts', PostController::class);


Route::Post('/register', [AuthController::class, 'rigester']);
Route::Post('/login', [AuthController::class, 'login']);
Route::Post('/logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');
