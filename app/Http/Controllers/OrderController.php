<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\App;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\Order;
use App\Models\Item;
use App\Models\Configuration;
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
            'finished' => 'nullable',
        ]);

        $q = Order::with('item.type')
            ->orderBy('created_at','desc');

        $q->when($request->input('query'), function($query, $q){
            return $query->whereRelation('item','title','like',"%$q%");
        });

        $q->when($request->input('finished') !== null, function($query, $finished) use($request){
            return $query->where('finished', $request->boolean('finished'));
        });

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
        $order->load('item.type');

        return Inertia::render('Orders/Show', [
            'order' => $order,
        ]);
    }

    /**
     * Updates the specified resource
     */
    public function update(Request $request, Order $order)
    {
        $request->validate([
            'finished' => 'sometimes|boolean',
            'payment_reference' => 'sometimes',
        ]);
        
        $order->finished = $request->input('finished', $order->finished);
        $order->payment_reference = $request->input('payment_reference', $order->payment_reference);
        $order->save();

        //OrderPaid::dispatchIf($order->paid, $order);

        return back();
    }

    /**
     * Create a new order
     */
    public function store(Request $request)
    {
        $request->validate([
            'item_id' => 'required|exists:items,id',
            'birthday_name' => 'nullable',
            'birthday_age' => 'nullable|integer',
            'birthday_main_address' => 'required',
            'birthday_secondary_address' => 'nullable',
            'birthday_date' => 'required|date',
            'birthday_from_time' => 'required',
            'birthday_to_time' => 'nullable',
            'observation' => 'nullable',
            'contact_name' => 'required',
            'contact_number' => 'required',
            'high_priority' => 'required|boolean',
            'map_ubication' => 'required|boolean',
            'whatsapp_confirmation' => 'required|boolean',
            'payment_method' => 'required',
            'currency' => 'required|in:usd,ars',
        ]);

        $configurations = Configuration::get()->mapWithKeys(function($item, $key){
            return [$item->variable => $item->value];
        });

        $order = new Order();
        $order->item_id = $request->input('item_id');
        $order->birthday_name = $request->input('birthday_name');
        $order->birthday_age = $request->input('birthday_age');
        $order->birthday_main_address = $request->input('birthday_main_address');
        $order->birthday_secondary_address = $request->input('birthday_secondary_address');
        $order->birthday_date = $request->input('birthday_date');
        $order->birthday_from_time = $request->input('birthday_from_time');
        $order->birthday_to_time = $request->input('birthday_to_time');
        $order->observation = $request->input('observation');
        $order->contact_name = $request->input('contact_name');
        $order->contact_number = $request->input('contact_number');
        $order->high_priority = $request->input('high_priority');
        $order->map_ubication = $request->input('map_ubication');
        $order->whatsapp_confirmation = $request->input('whatsapp_confirmation');
        $order->payment_method = $request->input('payment_method');
        
        $currency = $request->input('currency');

        $order->currency = $currency;
        $order->price = $order->calculatePrice(
            $currency, 
            $configurations->get("high_priority_price_$currency"), 
            $configurations->get("map_ubication_price_$currency"), 
            $configurations->get("whatsapp_confirmation_price_$currency")
        );
        $order->save();

        OrderCreated::dispatch($order);

        return $order;
    }
}
