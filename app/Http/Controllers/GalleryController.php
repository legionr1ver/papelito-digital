<?php

namespace App\Http\Controllers;
use App\Models\Invitation;
use App\Models\Tag;
use App\Models\Type;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class GalleryController extends Controller
{
    public function __invoke(Request $request, string $slug = null): Response
    {
        $q = Invitation::select('id','title','type_id','source','thumbnail','price');

        if( $search = $request->input('search') )
        {
            $q->where(function($query) use ($search){
                $query->where('title','like',"%$search%")
                    ->orWhere('description','like',"%$search%")
                    ->orWhereRelation('tags', 'label', 'like', "%$search%");
            });
        }

        if( $tag = $request->input('tag') )
            $q->whereRelation('tags', 'id', $tag);

        if( $type = $request->input('type') )
            $q->where('type_id', $type);

        return Inertia::render('Gallery/Show', [
            'invitations' => $q->paginate(15)->withQueryString(),
            'filters' => [
                'search' => $search,
                'tag' => $tag ? Tag::findOrFail($tag) : '',
                'type' => $type ? Type::findOrFail($type) : '',
            ],
        ]);
    }
}
