<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\belongsToMany;
use Illuminate\Database\Eloquent\Model;
use App\Models\Item;


class Tag extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'label',
        'slug',
    ];

    /**
     * Get the items for the tag.
     */
    public function items(): belongsToMany
    {
        return $this->belongsToMany(Item::class);
    }
}
