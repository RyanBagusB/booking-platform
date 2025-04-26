<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\Customer\CustomerController;
use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\Owner\OwnerController;

Route::middleware('guest')->group(function () {
    Route::get('/login', [AuthController::class, 'showLogin'])->name('login');
    Route::post('/login', [AuthController::class, 'login']);
});

Route::get('/', [CustomerController::class, 'index'])->name('customer.index');

Route::middleware('auth')->group(function () {
    Route::middleware('role:admin')->group(function () {
        Route::get('/admin', [AdminController::class, 'index'])->name('admin.index');
    });

    Route::middleware('role:owner')->group(function () {
        Route::get('/owner', [OwnerController::class, 'index'])->name('owner.index');
    });

    Route::post('/logout', [AuthController::class, 'logout'])->name('logout');
});
