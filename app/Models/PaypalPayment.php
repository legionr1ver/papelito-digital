<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;

class PaypalPayment extends Model
{
    use HasFactory;

    /**
     * The accessors to append to the model's array form.
     *
     * @var array
     */
    protected $appends = ['is_paid'];

    /**
     * Returns a boolean indicating if the payment succeded
     */
    public function isPaid(): Attribute
    {
        return Attribute::make(
            get: fn ($value, array $attributes) => (bool)$attributes['capture_json'],
        );
    }
}
