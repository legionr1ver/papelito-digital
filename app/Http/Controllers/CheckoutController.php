<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\App;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\Item;
use App\Models\Configuration;
use App\Http\Requests\StoreItemRequest;
use App\Http\Requests\UpdateItemRequest;

class CheckoutController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreItemRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show($id) : Response
    {
        return Inertia::render('Checkout/Item', [
            'previous_url' => url()->previous('/gallery'),
            'configurations' => Configuration::all(),
            'paypal_client_id' => config('paypal.client_id'),
            'mercadopago_public_key' => config('mercadopago.public_key'),
            'item' => Item::with('type','files')->findOrFail($id),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Item $item)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateItemRequest $request, Item $item)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Item $item)
    {
        //
    }
}
