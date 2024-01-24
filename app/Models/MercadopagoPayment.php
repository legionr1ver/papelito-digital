<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Relations\MorphOne;
use App\Models\Order;

class MercadopagoPayment extends Model
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
            get: fn ($value, array $attributes) => (bool)$attributes['payment_json'],
        );
    }
}
