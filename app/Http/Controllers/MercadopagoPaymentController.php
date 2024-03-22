<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use App\Exceptions\PaymentRejectedException;
use App\Models\Order;
use App\Models\MercadopagoPayment;
use App\Events\OrderPaid;

class MercadopagoPaymentController extends Controller
{
    /**
     * Create a preference on Mercado Pago.
     * Required for enabling Mercado Pago wallet payment
     */
    public function preference(Order $order)
    {
        if ($order->payment_method !== 'mercadopago' || $order->currency !== 'ars')
            throw new \Exception('Wrong payment method for the order.');

        $response = Http::acceptJson()
            ->withToken(config('mercadopago.access_token'))
            ->post('https://api.mercadopago.com/checkout/preferences', [
                'purpose' => 'wallet_purchase',
                'payer' => [
                    'name' => $order->contact_name,
                    'phone' => [
                        'number' => $order->contact_number,
                    ]
                ],
                'external_reference' => $order->id,
                'items' => [
                    [
                        'id' => $order->item->id,
                        'title' => $order->item->title,
                        'quantity' => 1,
                        'unit_price' => $order->price,
                        'category_id' => 'services',
                        'description' => $order->item->description,
                    ],
                ],
                'auto_return' => 'approved',
                'back_urls' => [
                    'success' => route('mercadopago-payment.state', ['order' => $order]),
                    'pending' => route('mercadopago-payment.state', ['order' => $order]),
                    'failure' => route('mercadopago-payment.state', ['order' => $order]),
                ],
            ])
            ->throw();

        DB::transaction(function () use ($response, $order) {

            $payment = new MercadopagoPayment();
            $payment->uuid = Str::uuid();
            $payment->preference_id = $response['id'];
            $payment->save();

            $order->payment()->associate($payment);
            $order->save();
        });

        return $response['id'];
    }

    /**
     * Create the payment on Mercadopago
     */
    public function payment(Request $request, Order $order)
    {
        $request->validate([
            'token' => 'required',
            'installments' => 'required',
            'payment_method_id' => 'required',
            'issuer_id' => 'required|integer',
            'payer.email' => 'required',
            'payer.identification.number' => 'required',
            'payer.identification.type' => 'required',
        ]);

        $response = Http::acceptJson()
            ->withToken(config('mercadopago.access_token'))
            ->withHeader('X-Idempotency-Key', $order->payment->uuid)
            ->post('https://api.mercadopago.com/v1/payments', [

                'external_reference' => $order->id,
                'transaction_amount' => $order->price,
                'token' => $request->input('token'),
                'description' => $order->item->title,
                'installments' => $request->input('installments'),
                'payment_method_id' => $request->input('payment_nethod_id'),
                'issuer_id' => $request->input('issuer_id'),
                'payer' => [
                    'email' => $request->input('payer.email'),
                    'identification' => [
                        'type' => $request->input('payer.identification.type'),
                        'number' => $request->input('payer.identification.number'),
                    ]
                ],
                "binary_mode" => true,
            ])
            ->throw();

        $payment = $order->payment;

        $payment->payment_json = $response->json();
        $payment->save();

        OrderPaid::dispatch($order);
    }

    /**
     * Show the current state of the order's payment
     */
    public function state(Order $order)
    {
        //TODO
    }
}
