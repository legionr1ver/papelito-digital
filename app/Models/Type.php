<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Type extends Model
{
    use HasFactory;

    const STATIC_INVITATION = 1;
    const ANIMATED_INVITATION = 2;
    const KIT = 3;
}
