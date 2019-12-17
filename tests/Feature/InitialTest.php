<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class InitialTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();
        $this->seed();
    }

    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_is_seeder_and_migration_working()
    {
        foreach (config('membership') as $membership) {
            $this->assertDatabaseHas('memberships', [
                'name' => $membership
            ]);
        }
    }
}
