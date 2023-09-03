<?php

use Illuminate\Support\Facades\Facade;
use Illuminate\Support\ServiceProvider;

return [

    /*
    |--------------------------------------------------------------------------
    | Public key
    |--------------------------------------------------------------------------
    |
    | The public key used to initialize Brick in the frontend => new MercadoPago('YOUR_PUBLIC_KEY');
    |
    */

    'public_key' => env('MERCADOPAGO_PUBLIC_KEY', 'APP_USR-fa860e22-5ef4-4595-a37c-e7548fa66abf'),

    /*
    |--------------------------------------------------------------------------
    | Access token
    |--------------------------------------------------------------------------
    |
    | Token used to call de API services from the backend.
    |
    */

    'access_token' => env('MERCADOPAGO_ACCESS_TOKEN', 'APP_USR-8038127693784843-090219-e8d91d10338167da238ee8a17d0cd471-383751243'),

];
