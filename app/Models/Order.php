<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\MorphTo;
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

    /**
     * Get the order's payment
     */
    public function payment(): MorphTo
    {
        return $this->morphTo();
    }

    /**
     * Calculate order's price
     */
    public function calculatePrice(string $currency, float $highPriorityPrice, float $mapUbicationPrice, float $whatsappConfirmationPrice): float
    {
        return $this->item->{$currency.'_price'}
            + ($this->high_priority ? $highPriorityPrice : 0)
            + ($this->map_ubication ? $mapUbicationPrice : 0)
            + ($this->whatsapp_confirmation ? $whatsappConfirmationPrice : 0);
    }
}
