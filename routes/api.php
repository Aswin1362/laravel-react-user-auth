<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserDetailsController;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->group(function () {
    Route::get('profile', [UserDetailsController::class, 'index']);
});

Route::post('login', [AuthController::class, 'login']);
