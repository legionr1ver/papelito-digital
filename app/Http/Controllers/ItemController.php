<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\DB;
use App\Models\Item;
use App\Models\Tag;
use App\Http\Requests\StoreItemRequest;
use App\Http\Requests\UpdateItemRequest;
use App\Models\ItemFile;

class ItemController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Items/List', [
            'paginatedItems' => Item::with('tags','type')->paginate(15),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Items/Create', [
            'tags' => Tag::all(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreItemRequest $request)
    {
        DB::transaction(function() use($request) {

            $tagsId = [];
            foreach( $request->input('tags', []) as $tag )
            {
                $tagsId[] = Tag::firstOrCreate([
                    'label' => $tag,
                    'slug' => Str::slug($tag),
                ])->id;
            }

            $item = new Item();
            $item->title = $request->input('title');
            $item->description = $request->input('description');
            $item->ars_price = $request->input('ars_price');
            $item->usd_price = $request->input('usd_price');
            $item->type_id = $request->input('type_id');
            $item->thumbnail = $request->file('thumbnail')->store('items/thumnails');
            $item->save();

            $item->tags()->attach($tagsId);

            if( $request->hasFile('files') )
            {
                foreach( $request->file('files') as $file )
                {
                    $newFile = new ItemFile();
                    $newFile->item()->associate($item);
                    $newFile->source = $file->store('/items/files');
                    $newFile->save();
                }
            }
        });

        return to_route('item.create')->with('message', 'Nuevo artículo creado correctamente.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Item $item) : Response
    {
        $item->load('files','tags','type');

        return Inertia::render('Items/Show', [
            'item' => $item,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Item $item)
    {
        $item->load('files','tags','type');

        return Inertia::render('Items/Edit', [
            'tags' => Tag::all(),
            'item' => $item,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateItemRequest $request, Item $item)
    {
        $tagsId = [];
        foreach( $request->input('tags', []) as $tag )
        {
            $tagsId[] = Tag::firstOrCreate([
                'label' => $tag,
                'slug' => Str::slug($tag),
            ])->id;
        }
        $item->tags()->sync($tagsId);

        $item->title = $request->input('title');
        $item->description = $request->input('description');
        $item->ars_price = $request->input('ars_price');
        $item->usd_price = $request->input('usd_price');
        if( $request->hasFile('thumbnail') )
            $item->thumbnail = $request->file('thumbnail')->store('items');
        $item->save();

        if( $request->has('filesDelete') )
        {
            ItemFile::destroy( $request->filesDelete );
        }

        if( $request->hasFile('files') )
        {
            foreach( $request->file('files') as $file )
            {
                $newFile = new ItemFile();
                $newFile->item()->associate($item);
                $newFile->source = $file->store('/items/files');
                $newFile->save();
            }
        }

        return to_route('item.edit', ['item' => $item->id])->with('message', 'Invitación editada correctamente.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Item $item)
    {
        $item->delete();
        
        return back()->with('message', "Invitación '$item->title' eliminada.");
    }

    /**
     * Show the thumbnail for the item
     */
    public function thumbnail(Item $item)
    {
        return Storage::get( $item->thumbnail );
    }
}
