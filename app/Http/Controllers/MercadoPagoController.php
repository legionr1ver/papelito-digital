<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use App\Models\Order;
use App\Exceptions\PaymentRejectedException;
use App\Events\OrderPaid;

class MercadoPagoController extends Controller
{
    /**
     * Create a preference on Mercado Pago.
     * Required for enabling Mercado Pago wallet payment
     */
    public function preference($orderId)
    {
        $order = Order::with('invitation')->findOrFail($orderId);

        $response = Http::acceptJson()
            ->withToken( config('mercadopago.access_token') )
            ->post('https://api.mercadopago.com/checkout/preferences',[
                'purpose' => 'wallet_purchase',
                'items' => [
                    [
                        'id' => $order->id,
                        'title' => 'Invitacion: ' . $order->invitation->title,
                        'quantity' => 1,
                        'unit_price' => $order->price,
                    ],
                ],
                'back_urls' => [
                    'success' => '',
                ],
            ]);

        $response->throw();

        return $response['id'];
    }

    /**
     * Process a mercado pago payment
     */
    public function process(Request $request)
    {
        $request->validate([
            'installments' => 'required|integer',
            'issuer_id' => 'required|integer',
            'payer.email' => 'required|email',
            'payer.identification.number' => 'required|integer',
            'payer.identification.type' => 'required',
            'payment_method_id' => 'required',
            'token' => 'required',
            'transaction_amount' => 'required',
            'external_reference' => 'required|integer|exists:orders,id',
        ]);

        $response = Http::acceptJson()
            ->withToken( config('mercadopago.access_token') )
            ->post('https://api.mercadopago.com/v1/payments', $request->all());

        $response->throw();

        if( $response['status'] !== 'approved' )
            throw new PaymentRejectedException($response);

        $order = Order::findOrFail($request->input('external_reference'));
        $order->payment_external_id = $response['id'];
        $order->save();

        OrderPaid::dispatch($order);
    }
}
