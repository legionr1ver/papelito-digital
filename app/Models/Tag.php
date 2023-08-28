<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\belongsToMany;
use Illuminate\Database\Eloquent\Model;
use App\Models\Invitation;


class Tag extends Model
{
    use HasFactory;

    /**
     * Get the invitations for the tag.
     */
    public function invitations(): belongsToMany
    {
        return $this->belongsToMany(Invitation::class);
    }
}
