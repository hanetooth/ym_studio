<?php

namespace App\Models;

use App\Models\Concerns\HasUuid;
use Illuminate\Database\Eloquent\Model;

class PurchasedPackage extends Model
{
    use HasUuid;

    protected $fillable = ['user_id', 'package_id', 'discount_id'];

    protected $table = 'purchased_packages';
}
