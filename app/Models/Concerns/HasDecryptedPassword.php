<?php

namespace App\Models\Concerns;

trait HasDecryptedPassword
{
    public function setPasswordAttribute($value)
    {
        $this->attributes['password'] = bcrypt($value);
    }
}
