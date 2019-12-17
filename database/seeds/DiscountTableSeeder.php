<?php

use Illuminate\Database\Seeder;
use App\Models\Discount;

class DiscountTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $path = storage_path() . "/json/discounts.json";

        try {
            $parsedJson = json_decode(file_get_contents($path), true);
            $discounts = $parsedJson['list'];
        } catch (\Exception $e) {
            return;
        }

        foreach ($discounts as $discount) {
            Discount::create([
                'coupon_code' => $discount['coupon_code'],
                'amount' => $discount['amount']
            ]);
        }
    }
}
