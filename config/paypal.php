<?php


return [

    /*
    |--------------------------------------------------------------------------
    | Auth data
    |--------------------------------------------------------------------------
    |
    | The CLIENT_ID and CLIENTE_SECRET used for PayPal
    |
    */

    'client_id' => env('PAYPAL_CLIENT_ID'),
    'client_secret' => env('PAYPAL_CLIENT_SECRET'),

    /*
    |--------------------------------------------------------------------------
    | API URL
    |--------------------------------------------------------------------------
    |
    | Base URL used in the API request for PayPal
    |
    */

    'base_url' => env('PAYPAL_BASE_URL', 'https://api-m.paypal.com'),

];
