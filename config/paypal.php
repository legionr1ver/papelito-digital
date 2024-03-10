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

    'client_id' => env('PAYPAL_CLIENT_ID', 'AcmdOT3_Bw6ofMIPOPxQmOyr9V_TzxoddkSmBKPxBQhmYTCDCtLNxAXKgf7HeznH2aH_fZXSi3b-c1N1'),
    'client_secret' => env('PAYPAL_CLIENT_SECRET', 'EIcemcTQtmVXSWmDAfkYyDqVhKCFGJ0izuZmdb8RFShA-lqdfaz8LIGquZ9o5WBCBBuj_an0hLlPanK9'),

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
