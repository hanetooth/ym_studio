<?php

namespace App\Http\Resources;

use App\Repositories\Contracts\DiscountRepository;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Route;

class PackageResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return $this->concernPurchased([
            'disp_order' => $this->display_order,
            'pack_id' => $this->id,
            'pack_name' => $this->name,
            'pack_description' => $this->description,
            'pack_type' =>  $this->type,
            'total_credit' => $this->total_credit,
            'tag_name' => optional($this->tag)->name,
            'validity_month' => $this->validity_month,
            'pack_price' => $this->price,
            'newbie_first_attend' => $this->newbie_first_attend,
            'newbie_addition_credit' => $this->newbie_additional_credit,
            'newbie_note' => $this->newbie_note,
            'pack_alias' => $this->alias,
            'estimate_price' => $this->estimate_price
        ]);
    }

    /**
     * Set purchased, discount values
     * if it's not package index call
     * and if there is authenticated user
     *
     * @param array $arr
     * @return array mixed
     */
    private function concernPurchased(array $arr)
    {
        if ((Route::currentRouteName() !== 'api.packages.index') && ($authUser = auth()->user())) {
            $isPurchased = $this->users()->where('user_id', $authUser->id)->exists();
            $arr['purchased'] = $isPurchased;
            try {
                $buyer = $this->users->where('id', $authUser->id)->first();
                $arr['discount'] = app(DiscountRepository::class)->find(optional($buyer)->getOriginal('pivot_discount_id'));
            } catch (\Exception $e) {
                $arr['discount'] = null;
            }
        }
        return $arr;
    }
}
