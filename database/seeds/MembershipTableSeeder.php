<?php

use Illuminate\Database\Seeder;
use App\Models\Membership;

class MembershipTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach (config('membership') as $membership) {
            Membership::create([
                'name' => $membership
            ]);
        }
    }
}
