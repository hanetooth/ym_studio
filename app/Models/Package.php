<?php

namespace App\Models;

use App\Models\Concerns\HasUuid;
use Illuminate\Database\Eloquent\Model;

class Package extends Model
{
    use HasUuid;

    protected $fillable = [
        'name', 'description', 'alias', 'display_order',
        'price', 'total_credit', 'validity_month', 'type',
        'newbie_first_attend', 'newbie_additional_credit', 'newbie_note',
        'tag_id'
    ];

    protected $table = 'packages';

    protected $types = [
        'shareable', 'non_shareable', 'unlimited'
    ];

    public function tag()
    {
        return $this->belongsTo(Tag::class);
    }

    public function users()
    {
        return $this->belongsToMany(User::class, 'user_package')
                    ->using(UserPackage::class)
                    ->withPivot(['discount_id'])
                    ->withTimestamps();
    }

    //public function usedDiscountByAuthUser()
    //{
    //    // Don't use optional to return error if there's no authenticated user.
    //    $authUserId = auth()->user()->id;
    //    return $this->belongsToMany(Discount::class, 'user_package')
    //        ->using(UserPackage::class)
    //        ->wherePivot('user_id', $authUserId)
    //        ->withTimestamps();
    //}

    public function setTypeAttribute($type)
    {
        if (in_array($type, $this->types)) {
            $this->attributes['type'] = $type;
        }
    }

    public function getEstimatePriceAttribute()
    {
        $estimatePrice = ($this->attributes['total_credit'] > 0) ? ($this->attributes['price'] / $this->attributes['total_credit']) : 0;
        return ($estimatePrice < 0) ? 0 : $estimatePrice;
    }
}
