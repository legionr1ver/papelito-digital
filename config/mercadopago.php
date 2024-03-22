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

    'public_key' => env('MERCADOPAGO_PUBLIC_KEY', 'APP_USR-55c86311-e630-420f-b6b1-8b53fc25e82f'),

    /*
    |--------------------------------------------------------------------------
    | Access token
    |--------------------------------------------------------------------------
    |
    | Token used to call de API services from the backend.
    |
    */

    'access_token' => env('MERCADOPAGO_ACCESS_TOKEN', 'APP_USR-8869177926466449-032120-c9ec68ce474d4d9f31d054096f81080c-383751243'),

];
