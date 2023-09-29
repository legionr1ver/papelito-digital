<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Notification;
use App\Models\Order;
use App\Models\Invitation;
use App\Notifications\OrderCreated;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Orders/List', [
            'paginatedOrders' => Order::with('invitation.type')->paginate(15),
        ]);
    }

    /**
     * Create a new order
     */
    public function store(Request $request)
    {
        $request->validate([
            'invitation_id' => 'required|exists:invitations,id',
            'name' => 'required',
            'address' => 'required',
            'observation' => 'nullable',
            'phone_number' => 'required',
            'map_ubication' => 'required|boolean',
            'whatsapp_confirmation' => 'required|boolean',
            'payment_method' => 'required|in:mercado_pago,transferencia',
        ]);

        $invitation = Invitation::findOrFail($request->invitation_id);
        $price = floor((
                $invitation->price
                + ( $request->boolean('map_ubication') ? 150 : 0 )
                + ( $request->boolean('whatsapp_confirmation') ? 150 : 0 )
            ) * ( $request->input('payment_method') === 'transferencia' ? 0.9 : 1 ));

        $order = new Order();
        $order->invitation_id = $request->input('invitation_id');
        $order->name = $request->input('name');
        $order->address = $request->input('address');
        $order->observation = $request->input('observation');
        $order->phone_number = $request->input('phone_number');
        $order->map_ubication = $request->boolean('map_ubication');
        $order->whatsapp_confirmation = $request->boolean('whatsapp_confirmation');
        $order->payment_method = $request->input('payment_method');
        $order->price = $price;
        $order->save();

        //Notification::route('mail',$order->mail)
            //->notify( new OrderCreated() );

        return $order;
    }
}
