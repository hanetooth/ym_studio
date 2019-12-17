<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Artisan;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
         $this->call(MembershipTableSeeder::class);
         $this->call(UserTableSeeder::class);
         $this->call(TagTableSeeder::class);
         $this->call(PackageTableSeeder::class);
         $this->call(DiscountTableSeeder::class);

         Artisan::call('passport:install', ['--force' => true]);
    }
}
