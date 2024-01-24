<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\GalleryController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\ItemController;
use App\Http\Controllers\ItemFileController;
use App\Http\Controllers\PayPalPaymentController;
use App\Http\Controllers\TransferPaymentController;
use App\Http\Controllers\MercadopagoPaymentController;
use App\Http\Controllers\CheckoutController;
use App\Http\Controllers\NotificationController;
use App\Http\Controllers\PreguntasController;
use App\Http\Controllers\CurrencyController;
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

Route::post('/mercadopago-payment/{order}/preference', [MercadopagoPaymentController::class, 'preference'])->name('mercadopago-payment.preference');
Route::post('/mercadopago-payment/{order}/payment', [MercadopagoPaymentController::class, 'payment'])->name('mercadopago-payment.payment');
Route::post('/mercadopago-payment/{order}/state', [MercadopagoPaymentController::class, 'state'])->name('mercadopago-payment.state');

Route::post('/paypal-payment/{order}/create', [PayPalPaymentController::class, 'create'])->name('paypal-payment.create');
Route::post('/paypal-payment/{order}/capture', [PayPalPaymentController::class, 'capture'])->name('paypal-payment.capture');

Route::post('/transfer-payment/{order}', [TransferPaymentController::class, 'store'])->name('transfer-payment.store');
Route::get('/transfer-payment/{order}/view', [TransferPaymentController::class, 'view'])->name('transfer-payment.view');

Route::get('/currency/{code}', CurrencyController::class);
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
