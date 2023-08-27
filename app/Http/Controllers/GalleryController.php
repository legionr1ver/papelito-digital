<?php

namespace App\Http\Controllers;
use App\Models\Invitation;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class GalleryController extends Controller
{
    public function __invoke(Request $request): Response
    {
        if( $request->has('search') ){
            $invitations = Invitation::where('title','like','%'.$request->search.'%')
                ->orWhere('description','like','%'.$request->search.'%')
                ->get();
        }else{
            $invitations = Invitation::all();
        }

        return Inertia::render('Gallery/Show', [
            'invitations' => $invitations,
        ]);
    }
}
