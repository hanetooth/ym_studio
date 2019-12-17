<?php

namespace App\Models;

use App\Models\Concerns\HasUuid;
use Illuminate\Database\Eloquent\Model;

class Membership extends Model
{
    use HasUuid;

    protected $fillable = ['name'];

    protected $table = 'memberships';
}
