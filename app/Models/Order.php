<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use App\Models\Item;

class Order extends Model
{
    use HasFactory;

    /**
     * The attributes that should be cast.
     *
     * @var array
     */
    protected $casts = [
        'high_priority' => 'boolean',
        'map_ubication' => 'boolean',
        'whatsapp_confirmation' => 'boolean',
        'price' => 'double',
    ];

    /**
     * Get the order's item
     */
    public function item(): BelongsTo
    {
        return $this->belongsTo(Item::class);
    }
}
