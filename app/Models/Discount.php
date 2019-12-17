<?php

namespace App\Models;

use App\Models\Concerns\HasUuid;
use Illuminate\Database\Eloquent\Model;

class Discount extends Model
{
    use HasUuid;

    protected $fillable = ['coupon_code', 'amount', 'is_used'];

    protected $table = 'discounts';

    /**
     * Scope a query to only include unused discounts.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeUnused($query)
    {
        return $query->where('is_used', false);
    }
}
