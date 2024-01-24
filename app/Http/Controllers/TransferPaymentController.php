<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use App\Models\Order;
use App\Models\TransferPayment;
use Exception;

class TransferPaymentController extends Controller
{
    /**
     * Create a new TransferPayment
     */
    public function store(Request $request, Order $order)
    {
        if( $order->payment_method !== 'transferencia' )
            throw new Exception('Only transfer payments has receipts.');

        $request->validate([
            'reference' => 'nullable',
            'receipt_image' => 'nullable|file|image',
        ]);

        DB::transaction(function() use($request, $order){

            $payment = new TransferPayment();
            $payment->reference = $request->input('reference');
            
            if( $request->hasFile('receipt_image') )
            {
                $payment->receipt_image = $request->file('receipt_image')->store('/receipts');
            }

            $payment->save();

            $order->payment()->associate($payment);
            $order->save();
        });

        return to_route('order.show', ['order' => $order]);
    }

    /**
     * Show order's transfer receipt
     */
    public function view(Order $order)
    {
        $order->load('payment');

        $payment = $order->payment;
        
        if( !$payment || !($payment instanceof TransferPayment) )
            throw new Exception('There is no payment.');

        return Storage::download( $payment->receipt_image, 'comprobante.' . pathinfo($payment->receipt_image, PATHINFO_EXTENSION) );
    }
}
