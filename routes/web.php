<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\GalleryController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\ItemController;
use App\Http\Controllers\ItemFileController;
use App\Http\Controllers\MercadoPagoController;
use App\Http\Controllers\CheckoutController;
use App\Http\Controllers\NotificationController;
use App\Http\Controllers\PreguntasController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', HomeController::class)->name('home');
Route::get('/gallery/{slug?}', GalleryController::class)->name('gallery');
Route::get('/preguntas', PreguntasController::class)->name('preguntas');
Route::get('/checkout/{id}', [CheckoutController::class,'show'])->name('checkout');
Route::post('/mercado-pago/preference/{orderId}', [MercadoPagoController::class, 'preference'])->name('mercado-pago.preference');
Route::post('/mercado-pago/process', [MercadoPagoController::class, 'process'])->name('mercado-pago.process');

Route::get('/item/{item}/thumbnail', [ItemController::class, 'thumbnail']);
Route::get('/file/{file}', ItemFileController::class);

Route::resources([
    'item' => ItemController::class,
    'order' => OrderController::class,
]);

Route::middleware('auth')->group(function(){

    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::resources([
        'notification' => NotificationController::class,
    ]);

    Route::post('notification-all/read', [NotificationController::class,'read'])->name('notification-all.read');
});

require __DIR__.'/auth.php';
