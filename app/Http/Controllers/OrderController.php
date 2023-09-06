<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Notification;
use App\Models\Order;
use App\Notifications\OrderCreated;
use App\Exceptions\PaymentRejectedException;

class OrderController extends Controller
{
    public function store(Request $request)
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
            'name' => 'required',
            'address' => 'required',
            'observation' => 'nullable',
            'phone_number' => 'required|integer',
            'invitation_id' => 'nullable|integer',
        ]);

        $response = Http::acceptJson()
            ->withToken( config('mercadopago.access_token') )
            ->post('https://api.mercadopago.com/v1/payments', $request->except('name','address','observation','phone_number','invitation_id'));

        $response->throw();

        if( $response['status'] !== 'approved' )
            throw new PaymentRejectedException($response);

        $order = new Order();
        $order->invitation_id = $request->input('invitation_id');
        $order->name = $request->input('name');
        $order->address = $request->input('address');
        $order->observation = $request->input('observation');
        $order->phone_number = $request->input('phone_number');
        $order->payment_id = $response['id'];
        $order->email = $request->input('payer.email');
        $order->save();

        //Notification::route('mail',$order->mail)
            //->notify( new OrderCreated() );

        return $order;
    }
}
