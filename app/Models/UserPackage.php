<?php

namespace App\Models;

use App\Models\Concerns\HasUuid;
use Illuminate\Database\Eloquent\Relations\Pivot;

class UserPackage extends Pivot
{
    use HasUuid;

    protected $fillable = ['user_id', 'package_id', 'discount_id'];

    protected $table = 'user_package';

    public function discount()
    {
        return $this->belongsTo(Discount::class);
    }
}
