<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

class NotificationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        return Inertia::render('Notifications/List', [
            'paginatedNotifications' => $request->user()->notifications()->paginate(15),
        ]);
    }

    /**
     * Updates the specified resource
     */
    public function update(Request $request, $notification)
    {
        $notificationObj = $request->user()->notifications()->where('id',$notification)->firstOrFail();
        $notificationObj->read_at = $request->boolean('read') ? now() : null;
        $notificationObj->save();

        return to_route('notifications.index');
    }

    /**
     * Updates the specified resource
     */
    public function destroy(Request $request, $notification)
    {
        $notificationObj = $request->user()->notifications()->where('id',$notification)->firstOrFail();
        $notificationObj->delete();

        return to_route('notifications.index');
    }

    /**
     * Updates the specified resource
     */
    public function read(Request $request)
    {
        $request->user()->unreadNotifications->markAsRead();

        return to_route('notifications.index');
    }
}
