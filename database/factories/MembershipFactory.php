<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Membership;
use Faker\Generator as Faker;

$factory->define(Membership::class, function (Faker $faker) {
    return [
        'name' => $faker->domainWord
    ];
});
