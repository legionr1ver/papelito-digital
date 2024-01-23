<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\DB;
use App\Models\Order;
use App\Models\PaypalPayment;

class PaypalPaymentController extends Controller
{
    function create(Order $order)
    {
        if( $order->payment_method !== 'paypal' || $order->currency !== 'usd' )
            throw new \Exception('Wrong payment method for the order.');

        $accessToken = self::getAccessToken();
        
        $response = Http::withToken($accessToken)
            //Para forzar un error en el sandbox
            //->withHeader('PayPal-Mock-Response', '{"mock_application_codes": "MISSING_REQUIRED_PARAMETER"}')
            ->post( config('paypal.base_url') . '/v2/checkout/orders', [
                'intent' => 'CAPTURE',
                'purchase_units' => [
                    [
                        'amount' => [
                            'currency_code' => 'USD',
                            'value' => number_format($order->price, 2),
                        ],
                    ],
                ],
            ])
            ->throw();

        DB::transaction(function() use($response, $order){

            $payment = new PaypalPayment();
            $payment->order_id = $response['id'];
            $payment->save();
    
            $order->payment()->associate($payment);
            $order->save();
        });

        return $response['id'];
    }

    function capture(Order $order)
    {
        $payment = $order->payment;

        if( $payment === null || !($payment instanceof PaypalPayment) )
            throw new \Exception("The order doesn't have a Paypal payment.");

        $accessToken = self::getAccessToken();

        $response = Http::withToken($accessToken)
            //->withHeader('PayPal-Mock-Response', '{"mock_application_codes": "TRANSACTION_REFUSED"}')
            ->withBody('')
            ->throw()
            ->post( config('paypal.base_url') . "/v2/checkout/orders/$payment->order_id/capture");

        $payment->capture_json = $response->body();
        $payment->save();

        return $response;
    }

    static private function getAccessToken() : string
    {
        $response = Http::withBasicAuth(config('paypal.client_id'), config('paypal.client_secret'))
            ->asForm()
            ->post( config('paypal.base_url') . '/v1/oauth2/token', [
                'grant_type' => 'client_credentials',
            ])
            ->throw();

        return $response['access_token'];
    }
}
