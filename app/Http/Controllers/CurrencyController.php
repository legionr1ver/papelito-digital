<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;

class CurrencyController extends Controller
{
    public function __invoke(Request $request, $code)
    {
        $request->session()->put('currency', $code);

        return back();
    }
}
