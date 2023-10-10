<?php

namespace App\Listeners;

use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Notification;
use App\Models\User;
use App\Events\OrderPaid;
use App\Notifications\OrderPaid as OrderPaidNotification;

class SendOrderPaidNotification
{
    /**
     * Create the event listener.
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     */
    public function handle(OrderPaid $event): void
    {
        $users = User::all();

        Notification::send($users, new OrderPaidNotification($event->order));

        //Crear tarea en trello!
    }
}
