<?php

use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Membership;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $membership = Membership::where('name', 'newbie')->first();
        User::create([
            'name' => 'John Doe',
            'email' => 'johndoe@test.dev',
            'password' => 'Pa$$w0rd',
            'membership_id' => $membership->id
        ]);
    }
}
