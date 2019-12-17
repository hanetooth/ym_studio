<?php

namespace App\Http\Resources;

class DiscountResourceCollection extends BaseResourceCollection
{



    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $authUser = auth()->user();
        return [
            "total_item" => $this->count(),
            "total_page" => $this->perPage(),
            'discount_list' => $this->collection
        ];
    }
}
