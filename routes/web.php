<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\Customer\CustomerController;
use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\Owner\OwnerController;

Route::middleware('guest')->group(function () {
    Route::get('/login', [AuthController::class, 'showLoginCustomer'])->name('login');
    Route::post('/login', [AuthController::class, 'loginCustomer']);

    Route::prefix('admin')->group(function () {
        Route::get('/login', [AuthController::class, 'showLoginAdminOwner'])->name('login.admin');
        Route::post('/login', [AuthController::class, 'loginAdminOwner']);
    });
});

Route::middleware('auth')->group(function () {
    Route::middleware('role:customer')->group(function () {
        Route::get('/', [CustomerController::class, 'index'])->name('customer.index');
    });

    Route::middleware('role:admin')->group(function () {
        Route::get('/admin', [AdminController::class, 'index'])->name('admin.index');
    });

    Route::middleware('role:owner')->group(function () {
        Route::get('/owner', [OwnerController::class, 'index'])->name('owner.index');
    });

    Route::post('/logout', [AuthController::class, 'logout'])->name('logout');
});
