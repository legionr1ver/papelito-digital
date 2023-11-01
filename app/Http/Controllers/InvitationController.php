<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Str;
use App\Models\Invitation;
use App\Models\Tag;
use App\Http\Requests\StoreInvitationRequest;
use App\Http\Requests\UpdateInvitationRequest;

class InvitationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Invitations/List', [
            'paginatedInvitations' => Invitation::with('tags','type')->paginate(15),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Invitations/Create', [
            'tags' => Tag::all(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreInvitationRequest $request)
    {
        $sourceFile = $request->file('source');
        $thumbnailFile = $request->file('thumbnail');

        $tagsId = [];
        foreach( $request->input('tags', []) as $tag )
        {
            $tagsId[] = Tag::firstOrCreate([
                'label' => $tag,
                'slug' => Str::slug($tag),
            ])->id;
        }

        $invitation = new Invitation();
        $invitation->title = $request->input('title');
        $invitation->description = $request->input('description');
        $invitation->price = $request->input('price');
        $invitation->source = basename($sourceFile->store('invitations', 'public'));
        $invitation->type_id = Str::startsWith($sourceFile->getMimeType(), 'image') ? 1 : 2;
        $invitation->thumbnail = $thumbnailFile ? basename($thumbnailFile->store('invitations', 'public')) : null;
        $invitation->save();

        $invitation->tags()->attach($tagsId);

        return to_route('invitations.create')->with('message', 'Nueva invitación creada correctamente.');
    }

    /**
     * Display the specified resource.
     */
    public function show($id) : Response
    {
        return Inertia::render('Invitations/Show', [
            'invitation' => Invitation::with('tags','type')->findOrFail($id),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Invitation $invitation)
    {
        $invitation->load('tags','type');

        return Inertia::render('Invitations/Edit', [
            'tags' => Tag::all(),
            'invitation' => $invitation,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateInvitationRequest $request, Invitation $invitation)
    {
        $tagsId = [];
        foreach( $request->input('tags', []) as $tag )
        {
            $tagsId[] = Tag::firstOrCreate([
                'label' => $tag,
                'slug' => Str::slug($tag),
            ])->id;
        }

        $invitation->title = $request->input('title');
        $invitation->description = $request->input('description');
        $invitation->price = $request->input('price');

        if( $thumbnailFile = $request->file('thumbnail') )
            $invitation->thumbnail = basename($thumbnailFile->store('invitations', 'public'));
            
        $invitation->save();

        $invitation->tags()->sync($tagsId);

        return to_route('invitations.edit', ['invitation' => $invitation->id])->with('message', 'Invitación editada correctamente.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Invitation $invitation)
    {
        $invitation->delete();
        
        return back()->with('message', "Invitación '$invitation->title' eliminada.");
    }
}
