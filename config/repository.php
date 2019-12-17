<?php

return [
    'bindings' => [
        App\Repositories\Contracts\DiscountRepository::class => App\Repositories\Eloquents\DiscountRepository::class,
        App\Repositories\Contracts\MembershipRepository::class => App\Repositories\Eloquents\MembershipRepository::class,
        App\Repositories\Contracts\PackageRepository::class => App\Repositories\Eloquents\PackageRepository::class,
        App\Repositories\Contracts\UserRepository::class => App\Repositories\Eloquents\UserRepository::class,
    ]
];
