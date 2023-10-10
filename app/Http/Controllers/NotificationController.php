<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class NotificationController extends Controller
{
    /**
     * Mark all notifications as read
     */
    public function read(Request $request)
    {
        $request->user()->unreadNotifications->markAsRead();

        return back();
    }
}
