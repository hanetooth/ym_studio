<?php

use Illuminate\Database\Seeder;
use App\Models\Tag;

class TagTableSeeder extends Seeder
{
    private $tags = [
        'Popular', 'New', 'Limited'
    ];

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach ($this->tags as $tag) {
            Tag::create([
                'name' => $tag
            ]);
        }
    }
}
