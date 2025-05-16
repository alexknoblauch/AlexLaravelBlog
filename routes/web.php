<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\LoginController;


Route::get('/', function () {
    return Inertia::render('welcome/Login2');
})->name('home');

Route::get('/db-test', function () {
    try {
        \DB::connection()->getPdo();
        return 'DB connection is working!';
    } catch (\Exception $e) {
        return 'DB connection error: ' . $e->getMessage();
    }
});


Route::post('/login', [LoginController::class, 'login']);


Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/profile', function () {
        return Inertia::render('profile/index');
    })->name('profile');
});


require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
