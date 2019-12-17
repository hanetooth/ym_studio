<?php

namespace App\Http\Resources;

class BaseResourceCollection extends \Illuminate\Http\Resources\Json\ResourceCollection
{
    public function perPage()
    {
        return (int) ceil($this->total() / $this->count());
    }
}
