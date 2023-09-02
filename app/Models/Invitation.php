<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Relations\belongsToMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Model;
use App\Models\Tag;

class Invitation extends Model
{
    use HasFactory;

    /**
     * The attributes that should be cast.
     *
     * @var array
     */
    protected $casts = [
        'price' => 'double',
    ];

    /**
     * The attributes that should be visible in arrays.
     *
     * @var array
     */
    protected $visible = [
        'id',
        'title',
        'description',
        'type_id',
        'price',
        'source_url',
    ];

    /**
     * The accessors to append to the model's array form.
     *
     * @var array
     */
    protected $appends = [
        'source_url',
    ];

    /**
     * Get the tags for the invitation.
     */
    public function tags(): belongsToMany
    {
        return $this->belongsToMany(Tag::class);
    }

    /**
     * Get the type of the invitation.
     */
    public function type(): belongsTo
    {
        return $this->belongsTo(Type::class);
    }

    protected function sourceUrl(): Attribute
    {
        return Attribute::make(
            get: fn () => "/storage/invitations/$this->source",
        );
    }
}
