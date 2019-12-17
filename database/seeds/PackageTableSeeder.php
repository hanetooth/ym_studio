<?php

use Illuminate\Database\Seeder;
use App\Models\Package;
use App\Models\Tag;

class PackageTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $path = storage_path() . "/json/packages.json";

        try {
            $parsedJson = json_decode(file_get_contents($path), true);
            $packages = $parsedJson['list'];
        } catch (\Exception $e) {
            return;
        }

        foreach ($packages as $package) {
            $tag = Tag::where('name', $package['tag_name'])->first();
            Package::create([
                'display_order' => $package['display_order'],
                'name' => $package['name'],
                'description' => $package['description'],
                'alias' => $package['alias'],
                'price' => $package['price'],
                'total_credit' => $package['total_credit'],
                'validity_month' => $package['validity_month'],
                'type' => $package['type'],
                'newbie_first_attend' => $package['newbie_first_attend'],
                'newbie_additional_credit' => $package['newbie_additional_credit'],
                'newbie_note' => $package['newbie_note'],
                'tag_id' => optional($tag)->id
            ]);
        }
    }
}
