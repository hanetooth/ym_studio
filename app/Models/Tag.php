<?php

namespace App\Models;

use App\Models\Concerns\HasUuid;
use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    use HasUuid;

    protected $fillable = ['name'];

    protected $table = 'tags';
}
