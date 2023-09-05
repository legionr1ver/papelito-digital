<?php

namespace App\Http\Controllers;
use App\Models\Invitation;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class GalleryController extends Controller
{
    public function __invoke(Request $request, string $slug = null): Response
    {
        /*
        if( $slug ){
            $invitations = Invitation::WhereRelation('tags', 'slug', $slug)->get();

        }else if( $request->has('search') ){
            $q = Invitation::where(function($query) use ($request){
                    $query->where('title','like','%'.$request->search.'%')
                        ->orWhere('description','like','%'.$request->search.'%')
                        ->orWhereRelation('tags', 'label', 'like', '%' . $request->seach . '%');
                });
                
            if( $request->type )
                $q->whereRelation('type', 'slug', $request->type);

            $invitations = $q->get();

        }else{
            $invitations = Invitation::all();
        }
        */

        return Inertia::render('Gallery/Show', [
            'initialSearch' => $request->input('search'),
            'initialType' => $request->input('type'),
            'initialSelectedTagSlug' => $slug,
            'invitations' => Invitation::with('tags','type')->get(),
        ]);
    }
}
