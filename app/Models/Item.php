<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Relations\belongsToMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\App;
use App\Models\Tag;
use App\Models\Order;
use App\Models\ItemFile;

class Item extends Model
{
    use HasFactory, SoftDeletes;

    /**
     * The attributes that should be cast.
     *
     * @var array
     */
    protected $casts = [
        'ars_price' => 'double',
        'usd_price' => 'double',
    ];

    /**
     * Get the tags for the item.
     */
    public function tags(): belongsToMany
    {
        return $this->belongsToMany(Tag::class);
    }

    /**
     * Get the type of the item.
     */
    public function type(): belongsTo
    {
        return $this->belongsTo(Type::class);
    }

    /**
     * Get the orders for the item.
     */
    public function orders(): HasMany
    {
        return $this->hasMany(Order::class);
    }

    /**
     * Get the files for the item.
     */
    public function files(): HasMany
    {
        return $this->hasMany(ItemFile::class);
    }
    
}
