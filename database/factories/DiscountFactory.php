<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Discount;
use Faker\Generator as Faker;

$factory->define(Discount::class, function (Faker $faker) {
    return [
        'coupon_code' => generateCouponCode(),
        'amount' => $faker->numberBetween(1, 99)
    ];
});
