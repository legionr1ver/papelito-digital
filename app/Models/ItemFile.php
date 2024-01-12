<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;
use App\Models\Item;

class ItemFile extends Model
{
    use HasFactory;

    /**
     * Get the item of the file.
     */
    public function item(): belongsTo
    {
        return $this->belongsTo(Item::class);
    }

    /**
     * The "booted" method of the model.
     *
     * @return void
     */
    protected static function booted()
    {
        static::saving(function ($file) {
            
            $file->mime = mime_content_type(Storage::path($file->source));
        });
    }
}
