<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\Order;
use App\Models\Invitation;
use App\Events\OrderCreated;
use App\Events\OrderPaid;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $request->validate([
            'query' => 'nullable',
            'finished' => 'nullable|boolean',
        ]);

        $q = Order::with('invitation.type')
            ->orderBy('created_at','desc');

        if( $searchQuery = $request->input('query') )
        {
            $q->where(function($query)use($searchQuery){
                $query->where('name','like',"%$searchQuery%")
                    ->orWhereRelation('invitation','title','like',"%$searchQuery%");
            });
        }

        if( $request->input('finished') )
        {
            $q->where('finished', $request->boolean('finished'));
        }

        return Inertia::render('Orders/List', [
            'search' => [
                'query' => $request->input('query'),
                'finished' => $request->input('finished'),
            ],
            'paginatedOrders' => $q->paginate(15),
        ]);
    }

    /**
     * Display the specified resource
     */
    public function show(Order $order)
    {
        $order->load('invitation');

        return Inertia::render('Orders/Show', [
            'order' => $order,
        ]);
    }

    /**
     * Updates the specified resource
     */
    public function update(Order $order, Request $request)
    {
        $request->validate([
            'finished' => 'boolean',
            'paid' => 'boolean',
        ]);
        
        $order->finished = $request->input('finished', $order->finished);
        $order->paid = $request->input('paid', $order->paid);
        $order->save();

        OrderPaid::dispatchIf($order->paid, $order);

        return back();
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

        OrderCreated::dispatch($order);

        return $order;
    }
}
